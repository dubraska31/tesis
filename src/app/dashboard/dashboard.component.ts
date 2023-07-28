import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Menu } from '../menu';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comidas: Hero[] = [];
  menus: Menu[] = [];

  constructor(
    private heroService: HeroService,
    private rocketDeliveryService: RocketDeliveryService,
    private router: Router,
    private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.rocketDeliveryService.getMenus()
      .subscribe(menus => {
        this.menus = menus;
        this.menus = this.menus.filter(menu => menu.disponible != false);
      });
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }
  agregarAlCarrito(menu: Menu): void {
    const confirmarAgregar = confirm('¿Desea agregar al carrito?');

    if (confirmarAgregar) {
      this.utilService.agregarComidaCarrito(menu);

    }
  }


  logout(): void {
    this.router.navigate(['/bienvenida']);
  }

}
