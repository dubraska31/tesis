export interface Contacto {
    idContacto: number,
    nombre: string,
    apellido: string,
    email: string,
    telefono: string,
    direccion: string,
    usuario: Usuario;
}

export interface Usuario {
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
