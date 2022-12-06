import { Component } from '@angular/core';
import { SearchscriptService } from 'src/app/service/searchscript.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.sass']
})
export class PokemonesComponent {

  constructor(private searchService: SearchscriptService) {
    this.searchService.loadScript();
  }

}
