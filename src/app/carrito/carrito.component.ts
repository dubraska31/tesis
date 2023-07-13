import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UtilService } from '../util-service';
import { Menu } from '../menu';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  menus: Menu[] = [];

  constructor(
    private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.menus = this.utilService.getComidasCarrito();
  }

}
