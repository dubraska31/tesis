import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../contacto';
import { Menu } from '../menu';
import { Pedido } from '../pedido';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  menus: Menu[] = [];
  totalPrecio: number = 0;

  constructor(
    private utilService: UtilService,
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getComidas();
    this.calculateTotalPrecio();
  }

  getComidas(): void {
    this.menus = this.utilService.getComidasCarrito();
  }

  pagar(): void {
    var contacto = new Contacto();
    contacto.idContacto = Number(this.utilService.getIdContacto());

    var pedido = new Pedido();
    pedido.menus = this.menus;
    pedido.contacto = contacto;

    this.rocketDeliveryService.crearPedido(pedido).subscribe(() => {
      this.utilService.limpiarCarrito();
      this.router.navigate(['/pago']);
    });
  }

  calculateTotalPrecio(): void {
    this.totalPrecio = this.menus.reduce((total, menu) => total + menu.precio, 0);
  }

  limpiarCarrito(): void {
    this.utilService.limpiarCarrito();
    this.getComidas();
    this.calculateTotalPrecio();
  }

}
