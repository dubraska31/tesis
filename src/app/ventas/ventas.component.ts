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
      .subscribe(data => {
        this.ventas = data;

        this.ventas.forEach(venta => {
          let total: number = 0;

          venta.menus.forEach(menu => {
            total = total + menu.precio;
          });

          venta.total = total;
        })
      })
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

  descargarComprobante() {
    this.rocketDeliveryService.descargarReporte().subscribe({
      next: (data) => {
        var newBlob = new Blob([data], { type: '.xlsx' });

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const data2 = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data2;
        link.download = 'Comprobante de ventas.xlsx';
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data2);
          link.remove();
        }, 100);
      },
      error: (e) => {
        console.error('error: ' + e.message);
      },
      complete: () => console.info('Reporte descargado')
    });
  }

}
