import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  comidas: Hero[] = [];

  constructor(
    private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.comidas = this.utilService.getComidasCarrito();
  }

}
