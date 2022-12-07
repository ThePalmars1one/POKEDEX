import { Component, OnInit} from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit{

  pikachu: any = [];
  charizard: any = [];
  squirtle: any = [];
  beedrill: any = [];
  diglett: any = [];
  machop: any = [];

  constructor(private pokemonService: PokemonService){

  }
  
  ngOnInit(): void {
    this.getPikachu();
    this.getCharizard();
    this.getSquirtle();
    this.getBeedrill();
    this.getDiglett();
    this.getMachop();
  }

  getPikachu(): void {
    this.pokemonService.getPokemon(1,24).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.pikachu.push(uniqResponse);
      })
      })
    })

  }

  getCharizard(): void {
    this.pokemonService.getPokemon(1,5).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.charizard.push(uniqResponse);
      })
      })
    })

  }

  getSquirtle(): void {
    this.pokemonService.getPokemon(1,6).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.squirtle.push(uniqResponse);
      })
      })
    })

  }

  getBeedrill(): void {
    this.pokemonService.getPokemon(1,14).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.beedrill.push(uniqResponse);
      })
      })
    })

  }

  getDiglett(): void {
    this.pokemonService.getPokemon(1,49).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.diglett.push(uniqResponse);
      })
      })
    })

  }

  getMachop(): void {
    this.pokemonService.getPokemon(1,65).subscribe((response: any) => {
      console.log(response)
      response.results.forEach((result: {name:string}) => {
        this.pokemonService.getMoreData(result.name).subscribe((uniqResponse: any) => {
        console.log(uniqResponse)
        this.machop.push(uniqResponse);
      })
      })
    })

  }


}
