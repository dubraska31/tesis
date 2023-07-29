import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from '../ingrediente';
import { RocketDeliveryService } from '../rocket-delivery.service';

@Component({
  selector: 'app-editar-ingrediente',
  templateUrl: './editar-ingrediente.component.html',
  styleUrls: ['./editar-ingrediente.component.css']
})
export class EditarIngredienteComponent {
  ingrediente: Ingrediente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rocketDeliveryService: RocketDeliveryService
  ) {
    this.ingrediente = Ingrediente.buildDefault();
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.rocketDeliveryService.getIngredienteById(id).subscribe(data => {
      this.ingrediente = data;
    });
  }

  editarIngrediente(ingrediente: Ingrediente): void {
    this.rocketDeliveryService.editarIngrediente(ingrediente).subscribe({
      next: () => {
        this.router.navigate(['/ingredientes']);
      },
      error: (e) => {
        console.error('Error actualizando ingrediente: ' + e.message);
      },
      complete: () => console.info('ingrediente actualizado')
    });
  }

}
