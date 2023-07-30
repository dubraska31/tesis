import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../contacto';
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
  contacto: Contacto;

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService,
    private utilService: UtilService
  ) {
    this.contacto = Contacto.buildDefault();
  }

  ngOnInit(): void {
    this.buscarContactoByUsername();
  }

  cambiarClave(): void {
    let usuario = new Usuario();
    usuario.password = this.clave;
    usuario.username = this.utilService.getUserName();

    this.rocketDeliveryService.cambiarClave(usuario).subscribe(() => {
      this.router.navigate(['/bienvenida']);
    })
  }

  buscarContactoByUsername() {
    this.rocketDeliveryService.buscarContactoByUsername(this.utilService.getUserName())
      .subscribe(data => {
        this.contacto = data;
      });
  }

  editarContacto(): void {
    this.contacto.usuario.authorities = [];

    this.rocketDeliveryService.editarContacto(this.contacto).subscribe({
      next: () => {
        alert('Contacto actualizado exitosamente!');
        this.router.navigate(['/perfil-usuario']);
      },
      error: (e) => {
        console.error('Error editando contacto: ' + e.message);
      },
      complete: () => console.info('Contacto actualizado')
    });
  }

}
