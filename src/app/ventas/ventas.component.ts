import { Component } from '@angular/core';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Venta } from '../venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  ventas: Venta[] = [];
  estadoSeleccionado = '';

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(): void {
    this.rocketDeliveryService.getVentas()
      .subscribe((ventas) => (this.ventas = ventas));
  }

  onChange(estado: string, venta: Venta) {
    venta.contacto.usuario.authorities = [];

    switch (estado) {
      case "enProgreso": {
        this.rocketDeliveryService.establecerEnProgreso(venta)
          .subscribe(data => {
            this.ventas = data;
            this.getVentas();
          })
        break;
      }

      case "listoParaEntrega": {
        this.rocketDeliveryService.listoParaEntrega(venta)
          .subscribe(data => {
            this.ventas = data;
            this.getVentas();
          })
        break;
      }

      case "entregado": {
        this.rocketDeliveryService.entregado(venta)
          .subscribe(data => {
            this.ventas = data;
            this.getVentas();
          })
        break;
      }

      case "cancelado": {
        this.rocketDeliveryService.establecerCancelado(venta)
          .subscribe(data => {
            this.ventas = data;
            this.getVentas();
          })
        break;
      }
    }
  }

}
