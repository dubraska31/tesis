import { Contacto } from "./contacto";
import { Estado } from "./estado";
import { Menu } from "./menu";

export class Venta {

  idPedido: number;
  menus: Menu[];
  contacto: Contacto;
  estado: Estado;
  total: number;

}
