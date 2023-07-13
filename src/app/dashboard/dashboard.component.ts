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

  agregarAlCarrito(menu: Menu): void {
    this.utilService.agregarComidaCarrito(menu);
    alert('Agregado al carrito!');
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
