export class Ingrediente {
  idIngredienteStock: number;
  cantidadStock: number;
  nombreIngrediente: string;
  descripcionIngrediente: string;
  imagenIngrediente: string;
  disponible: boolean;

  public static buildDefault(): Ingrediente {
    const ingrediente = new Ingrediente();

    ingrediente.idIngredienteStock = null;
    ingrediente.cantidadStock = null;
    ingrediente.nombreIngrediente = null;
    ingrediente.descripcionIngrediente = null;
    ingrediente.imagenIngrediente = null;

    return ingrediente;
  }

}
