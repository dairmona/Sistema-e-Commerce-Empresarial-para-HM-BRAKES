class Carrito {
    private _productos: Producto[];
    private _total: number;

    constructor() {
        this._productos = [];
        this._total = 0;
    }

    get productos(): Producto[] {
        return this._productos;
    }

    get total(): number {
        return this._total;
    }

    public agregarProducto(producto: Producto): void {
        if (producto.stock <= 0) {
            throw new Error("Producto sin stock disponible");
        }

        this._productos.push(producto);
        producto.actualizarStock(-1);
        this.calcularTotal();
    }

    public removerProducto(idProducto: number): void {
        const index = this._productos.findIndex(p => p.id === idProducto);
        if (index !== -1) {
            this._productos[index].actualizarStock(1);
            this._productos.splice(index, 1);
            this.calcularTotal();
        }
    }

    private calcularTotal(): void {
        this._total = this._productos.reduce((sum, producto) => sum + producto.precio, 0);
    }

    public vaciarCarrito(): void {
        this._productos.forEach(p => p.actualizarStock(1));
        this._productos = [];
        this._total = 0;
    }
}