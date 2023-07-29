import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  usuarios: Usuario[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.contacto = Contacto.buildDefault();
    this.contacto.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.rocketDeliveryService.getUsuariosSinContacto()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }

  agregarCliente() {
    this.contacto.usuario.idUsuario = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.rocketDeliveryService.crearCliente(this.contacto)
      .subscribe(() => {
        alert('Cliente creado exitosamente!');
        this.router.navigate(['/bienvenida']);
      }, error => {
        console.log('error: ' + error.message);
      });
  }






}
