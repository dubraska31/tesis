
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

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
    private rocketDeliveryService: RocketDeliveryService) {
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.rocketDeliveryService.getMenus()
      .subscribe(data => {
        this.menus = data;
        this.menus = this.menus.filter(menu => menu.disponible != false);
      });
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }

}
