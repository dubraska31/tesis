import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  comidas: Hero[] = [];
  menus: Menu[] = [];

  constructor(
    private heroService: HeroService,
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    // this.getComidas();
    this.getMenus();
  }

  getMenus(): void {
    this.rocketDeliveryService
      .getMenus()
      .subscribe((menus) => (this.menus = menus));
  }

  getComidas(): void {
    this.heroService
      .getHeroes()
      .subscribe((comidas) => (this.comidas = comidas));
  }

  eliminarMenu(idMenu: number): void {
    const confirmation = window.confirm('¿Desea eliminar el menú?');

    if (confirmation) {
      this.rocketDeliveryService.eliminarMenu(idMenu).subscribe(() => {
        this.menus = this.menus.filter((menu) => menu.idMenu !== idMenu);
      });
    }
  }
}
