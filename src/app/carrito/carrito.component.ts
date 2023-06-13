import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  comidas: Hero[] = [];

  constructor(
    private carritoService: CarritoService) {
  }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.comidas = this.carritoService.getComidas();
  }

}
