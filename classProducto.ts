class Producto {
    private _id: number;
    private _nombre: string;
    private _descripcion: string;
    private _precio: number;
    private _stock: number;

    constructor(id: number, nombre: string, descripcion: string, precio: number, stock: number) {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this.precio = precio;  // usa setter
        this.stock = stock;    // usa setter
    }

    // Getters
    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    get precio(): number {
        return this._precio;
    }

    get stock(): number {
        return this._stock;
    }

    // Setters con validaciones
    set precio(valor: number) {
        if (valor < 0) throw new Error("El precio no puede ser negativo");
        this._precio = valor;
    }

    set stock(valor: number) {
        if (valor < 0) throw new Error("El stock no puede ser negativo");
        this._stock = valor;
    }

    public actualizarStock(cantidad: number): void {
        if (this._stock + cantidad < 0) {
            throw new Error("Stock insuficiente");
        }
        this._stock += cantidad;
    }
}