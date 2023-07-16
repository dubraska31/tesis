import { Component } from '@angular/core';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent {
  contactosList: Contacto[] = [];

  constructor(private rocketDeliveryService: RocketDeliveryService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.rocketDeliveryService.getContactos()
      .subscribe((contactos) => (this.contactosList = contactos));
  }

}
