import { Component } from '@angular/core';
import { Contacto } from '../contacto';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent {
  contactosList: Contacto[] = [];

  constructor(
    private rocketDeliveryService: RocketDeliveryService
  ) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.rocketDeliveryService.getContactos()
      .subscribe((contactos) => (this.contactosList = contactos));
  }

  descargarCartera() {
    this.rocketDeliveryService.descargarCartera().subscribe({
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
