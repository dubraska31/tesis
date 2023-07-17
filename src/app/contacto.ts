import { Usuario } from "./usuario";

export class Contacto {

  idContacto: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  usuario: Usuario;

  public static buildDefault(): Contacto {
    const contacto = new Contacto();

    contacto.idContacto = null;
    contacto.nombre = null;
    contacto.apellido = null;
    contacto.email = null;
    contacto.telefono = null;
    contacto.direccion = null;
    contacto.usuario = null;

    return contacto;
  }

}
