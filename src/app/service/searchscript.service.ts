import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchscriptService {

  constructor() { }

  public loadScript() {
    let search_pokemon = document.createElement('script');
    search_pokemon.src = 'assets/js/search.js';
    search_pokemon.type = 'text/javascript';
    search_pokemon.async = true;
    document.getElementsByTagName('head')[0].appendChild(search_pokemon);
  }
}



