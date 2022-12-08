const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeWeight = document.querySelector('[data-poke-weight]');
const pokeHeight = document.querySelector('[data-poke-height]');
const pokewImg = document.querySelector('[data-poke-weight-img]');
const pokehImg = document.querySelector('[data-poke-height-img]');

const typeColors = {
    electric: '#F3F802',
    normal: '#36EFE4',
    fire: '#F9620D',
    water: '#366AEF',
    ice: '#98D8D8',
    rock: '#85752E',
    fairy: '#DA3CDD',
    flying: '#D587FA',
    grass: '#78C850',
    psychic: '#F85888',
    ghost: '#4F2861',
    bug: '#05CA77',
    poison: '#CAEF36',
    ground: '#EFBB36',
    dragon: '#8736EF',
    steel: '#807870',
    fighting: '#C03028',
    dark: '#252424',
    default: '#2A1A1F',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `N° ${data.id}`;
    pokewImg.style.display = "block";
    pokeWeight.textContent = `${data.weight}`;
    pokehImg.style.display = "block";
    pokeHeight.textContent = `${data.height}`;
    renderPokemonTypes(types);
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        //typeTextElement.style.color = typeColors[type.type.name]; //DA EL COLOR AL TIPO
        typeTextElement.style.background = typeColors[type.type.name];
        typeTextElement.style.padding = "5px 5px";
        typeTextElement.textContent = type.type.name; //DA EL TIPO DE POKEMON
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'assets/img/pokeball.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
    pokeWeight.textContent = '';
    pokeHeight.textContent = '';
    pokehImg.style.display = "none";
    pokewImg.style.display = "none";
}