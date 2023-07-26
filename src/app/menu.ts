import { IngredienteEnMenu } from "./ingrediente-en-menu";

export class Menu {

  idMenu: number;
  nombreMenu: string;
  descripcion_menu: string;
  precio: number;
  imagen_menu: string;
  disponible: boolean;
  ingredientesEnMenu: IngredienteEnMenu[];

  public static buildDefault(): Menu {
    const menu = new Menu();

    menu.nombreMenu = null;
    menu.descripcion_menu = null;
    menu.precio = null;
    menu.imagen_menu = null;
    menu.disponible = true;
    menu.ingredientesEnMenu = [];

    return menu;
  }

}
