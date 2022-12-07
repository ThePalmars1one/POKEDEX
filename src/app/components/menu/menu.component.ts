import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit{

  show: boolean = true;

  showTypes(){
    if(this.show){
      this.show = false;
    }
    else{
      this.show = true;
    }
  }

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(): void {
    this.showTypes();
  }



}
