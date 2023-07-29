import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registrar } from '../registrar';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-generar-usuario',
  templateUrl: './generar-usuario.component.html',
  styleUrls: ['./generar-usuario.component.css']
})
export class GenerarUsuarioComponent {
  registrarCliente: Registrar;

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService,
    private utilService: UtilService
  ) {
    this.registrarCliente = new Registrar(); // Inicializar el objeto registrarCliente
  }

  ngOnInit(): void {
    this.utilService.limpiarCarrito();
  }

  crearCliente(): void {
    console.log("this.registrarCliente.username: " + this.registrarCliente.username);
    console.log("this.registrarCliente.password: " + this.registrarCliente.password);

    this.rocketDeliveryService.registrar(this.registrarCliente).subscribe({
      next: (data) => {
        if (data === 'EL USUARIO YA EXISTE') {
          alert(data);
        } else {
          this.router.navigate(['/crear-cliente/' + data]);
        }
      },
      error: (e) => {
        console.error('error: ' + e.message);
      },
      complete: () => console.info('Cliente registrado')
    });
  }

}
