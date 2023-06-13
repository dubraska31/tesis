import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comidas: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router,
    private carritoService: CarritoService) {
  }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }

  agregarAlCarrito(comida: Hero): void {
    this.carritoService.agregarAlCarrito(comida);
    alert('Agregado al carrito!');
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
