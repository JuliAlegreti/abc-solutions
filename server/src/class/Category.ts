/**
 * Clase para la representación de la categoria
 */
export class Category {
    categori_id: number;
    name: string;

    constructor(id, name){
        this.categori_id = id;
        this.name = name;
    }
}