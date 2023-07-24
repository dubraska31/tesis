import { Injectable } from "@angular/core";
import { Hero } from "./hero";

@Injectable({ providedIn: 'root' })
export class CarritoService {

    comidas: Hero[] = [];

    agregarAlCarrito(comida: Hero): void {
        this.comidas.push(comida);
    }

    getComidas() {
        return this.comidas;
    }
}