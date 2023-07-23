import { Authority } from "./authority";

export class Usuario {

  idUsuario: number;
  username: string;
  password: string;
  roles: string[];
  enabled: boolean;
  authorities: Authority[];
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;

}
