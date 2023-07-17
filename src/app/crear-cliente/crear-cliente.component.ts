import { Component } from '@angular/core';
import { Contacto } from '../contacto';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  contacto: Contacto;
  idUsuario: number;

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.contacto = Contacto.buildDefault();
    this.contacto.usuario = new Usuario();
  }

  agregarCliente() {
    this.contacto.usuario.idUsuario = this.idUsuario;
    this.rocketDeliveryService.crearCliente(this.contacto).subscribe();
  }
}
