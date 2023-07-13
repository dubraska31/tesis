import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Menu } from "./menu";

@Injectable({ providedIn: 'root' })

export class UtilService {
  private comidasCarrito: Menu[] = [];

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(value: string) {
    localStorage.setItem('token', value);
  }

  public getComidasCarrito(): Menu[] {
    return this.comidasCarrito;
  }

  public agregarComidaCarrito(menu: Menu): void {
    this.comidasCarrito.push(menu);
  }
}
