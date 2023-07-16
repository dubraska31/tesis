export class Usuario {

  idUsuario: number;
  username: string;
  password: string;
  roles: string[];
  enabled: boolean;
  authorities: string[];
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;

}
