import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  usuarios: Usuario[];

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.contacto = Contacto.buildDefault();
    this.contacto.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.rocketDeliveryService.getUsuariosSinContacto()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }

  onChange(idUsuario: number) {
    this.idUsuario = idUsuario;
  }

  agregarCliente() {
    this.contacto.usuario.idUsuario = this.idUsuario;

    this.rocketDeliveryService.crearCliente(this.contacto)
      .subscribe(() => {
        this.router.navigate(['/bienvenida']);
      }, error => {
        console.log('error: ' + error.message);
      });
  }
}
