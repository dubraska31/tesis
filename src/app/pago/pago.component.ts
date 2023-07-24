import { Component } from '@angular/core';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  descargarComprobante() {
    this.rocketDeliveryService.descargarReporte().subscribe({
      next: (data) => {
        var newBlob = new Blob([data], { type: '.xlsx' });

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const data2 = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data2;
        link.download = 'Comprobante de pago.xlsx';
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
