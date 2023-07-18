
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {


  comidas: Hero[] = [];
  menus: Menu[] = [];

  constructor(
    private heroService: HeroService,
    private rocketDeliveryService: RocketDeliveryService,
    private router: Router,
    private utilService: UtilService) {
  }

  ngOnInit(): void {
    // this.getComidas();
    this.getMenus();
  }

  getMenus(): void {
    this.rocketDeliveryService.getMenus()
      .subscribe(menus => this.menus = menus);
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }

 

}
