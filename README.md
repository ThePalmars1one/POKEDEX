#POKEDEX
<p align=center>
<img src="https://i.postimg.cc/CLfC39yV/5.png">
</p>

Regularmente las API al consumirlas suelen tener un costo, pero hoy en día hay muchas de libre acceso para ser utilizadas con fines académicos e informatimos como la dispuesta en [PokeApi](https://pokeapi.co/ "PokeApi").

El proyecto consiste en la elaboración de una PokeDex que para desconocedores del tema, es una enciclopedia sobre los Pokemones existentes, al cual se puede acceder mediante [Figma](https://www.figma.com/file/lxRuruwrg2MlS24CWgUM3i/PokeDex?node-id=0%3A1&t=GAJmhdlXRCgPZd5F-1 "Figma").

## ¿Qué es una API REST?
Las API REST proporcionan una forma flexible y ligera de integrar aplicaciones y han surgido como el método más común para conectar componentes en la arquitectura de microservicios.

Una API REST es una API que se ajusta a los principios de diseño de REST, un estilo de arquitectura también denominado transferencia de estado representacional. Por este motivo, las API REST son a veces denominadas API RESTful.

REST, definido por primera vez en el año 2000 por el científico de la computación Dr. Roy Fielding en su tesis doctoral, proporciona un nivel relativamente alto de flexibilidad y libertad para los desarrolladores. Dicha flexibilidad es solo una razón por la que las API REST han surgido como un método común para conectar componentes y aplicaciones en una arquitectura de microservicios.

## Fetch / Axios

Arranquemos definiendo la api fetch. Esta es un metodo del objeto en javascript llamado window, o sea que para utilizarlo no necesitamos instalar nada extra. Simplemente hacemos el llamado escribiendo fetch(url) y esto nos devuelve una promise con la respuesta. En el caso de hacer una petición http GET, el único parámetro obligatorio que recibe fetch es la URL.

Para extraer el body de la respuesta tendremos que usar el metodo .json(). Y con ese valor retornado obtendremos otra promesa en donde viajan los datos que pedimos, accedemos a ellos con .then y utilizando la respuesta pasada por parámetro, en este caso le pusimos data.

<p align=center>
<img src="https://i.postimg.cc/7Lm9X7zs/CONSUMO-API.png">
</p>

Axios por otro lado es una libreria de javascript . Hay que en importarla en nuestro proyecto por cdn o instalarla. Al igual que fetch, axios se basa en promises. Si vamos a hacer una petición GET, sólo debemos llamar al método desde axios agregandole ..get(url) :

<p align=center>
<img src="https://i.postimg.cc/g2580DvP/AXIOS.png">
</p>

## Servicios usados en el proyecto

El primer servicio a continuación es utilizado para cargar el JavaScript en un componente en especifico, que seria la barra de búsqueda de los Pokemones:

<p align=center>
<img src="https://i.postimg.cc/xdnYLrGG/load-Script.png">
</p>

El segundo servicio es para consumir la API llamando pokemones en específico en el componente Team:

<p align=center>
<img src="https://i.postimg.cc/NG9MscdL/load-Pokemon.png">
</p>

## Componentes

Se crearon 6 componentes para la totalidad del proyecto:

### Header
Simplemente para mostrar las redes sociales y el Logo Pokemon
### Home
Mediante configuración de rutas, es la primera pestaña que ve el usuario

<p align=center>
<img src="https://i.postimg.cc/Bb626ww4/home.png">
</p>

### Footer
Basado en el diseño de Figma, unos iconos Pixel Art de Pokemon y una Pokebola

### Menu
Menu Desplegable que muestra los tipos de Pokemon existentes, no se uso Javascript ni estilos para que funcionara, simplemente la funcionalidad ngIF que dispone Angular.


<p align=center>
<img src="https://i.postimg.cc/8CTQjqM2/menu.png">
</p>

La función hecha en el menu.component.ts para que funcionara:

<p align=center>
<img src="https://i.postimg.cc/wBxqStfR/typemenu.png">
</p>

### Pokemones
Diseño del formulario y de la tarjeta que muestra la información del pokemon buscado, su funcionalidad se da mediante un archivo JavaScript que se carga en el componente mediante un servicio.

### Team
Mediante consumo de API, donde se seleccionaba la llamada de solo un pokemon y en una posición en específico relacionado al ID del pokemon necesitado, se logró ser fiel al diseño de Figma en cuanto a la elección del equipo compuesto por 6 Pokemones.

<p align=center>
<img src="https://i.postimg.cc/zB5CmkmS/TEAMPIKA.png">
</p>

