import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Usuario } from '../usuario';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  clave: string;

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService,
    private utilService: UtilService
  ) { }

  cambiarClave(): void {
    let usuario = new Usuario();
    usuario.password = this.clave;
    usuario.username = this.utilService.getUserName();

    this.rocketDeliveryService.cambiarClave(usuario).subscribe(() => {
      this.router.navigate(['/bienvenida']);
    })
  }


    /*editarContacto(contacto: Contacto): void {
    this.rocketDeliveryService.editarContacto(contacto).subscribe({
      next: () => {
        this.router.navigate(['/contactos']);
      },
      error: (e) => {
        console.error('Error actualizando ingrediente: ' + e.message);
      },
      complete: () => console.info('Contacto actualizado')
    });
  }*/

}
