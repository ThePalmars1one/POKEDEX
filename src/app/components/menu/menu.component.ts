import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    const MenuIcon = document.getElementById("icon_menu") as HTMLElement
    const menu = document.getElementById("poke_menu") as HTMLElement

    MenuIcon.addEventListener("click", (e)=> {
      menu.classList.toggle("active")
    })
    
  }
}
