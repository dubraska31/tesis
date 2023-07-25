import { Injectable } from "@angular/core";
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

  public getIdContacto(): string | null {
    return localStorage.getItem('IdContacto');
  }

  public setIdContacto(value: string) {
    localStorage.setItem('IdContacto', value);
  }

  public getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  public setUserName(value: string) {
    localStorage.setItem('userName', value);
  }

  public getComidasCarrito(): Menu[] {
    return this.comidasCarrito;
  }

  public agregarComidaCarrito(menu: Menu): void {
    this.comidasCarrito.push(menu);
  }

  public limpiarCarrito(): void {
    this.comidasCarrito = [];
  }
}
