import { Injectable } from "@angular/core";
import { Hero } from "./hero";

@Injectable({ providedIn: 'root' })

export class UtilService {
    private token: string = '';
    private comidasCarrito: Hero[] = [];

    public getToken(): string {
        return this.token;
    }

    public setToken(value: string) {
        this.token = value;
    }

    public getComidasCarrito(): Hero[] {
        return this.comidasCarrito;
    }

    public agregarComidaCarrito(comida: Hero): void {
        this.comidasCarrito.push(comida);
    }
}
