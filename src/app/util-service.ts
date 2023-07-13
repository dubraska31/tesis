import { Injectable } from "@angular/core";
import { Hero } from "./hero";

@Injectable({ providedIn: 'root' })

export class UtilService {
    private comidasCarrito: Hero[] = [];

    public getToken(): string | null {
        return localStorage.getItem('token');
    }

    public setToken(value: string) {
      localStorage.setItem('token', value);
    }

    public getComidasCarrito(): Hero[] {
        return this.comidasCarrito;
    }

    public agregarComidaCarrito(comida: Hero): void {
        this.comidasCarrito.push(comida);
    }
}
