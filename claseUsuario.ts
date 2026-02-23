class Usuario {
    private _id: number;
    private _nombre: string;
    private _correo: string;
    private _password: string;

    constructor(id: number, nombre: string, correo: string, password: string) {
        this._id = id;
        this._nombre = nombre;
        this.correo = correo; // usa setter
        this._password = password;
    }

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get correo(): string {
        return this._correo;
    }

    set correo(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("Correo electrónico inválido");
        }
        this._correo = valor;
    }

    public validarPassword(password: string): boolean {
        return this._password === password;
    }

    // Destructor simulado
    public destruirSesion(): void {
        console.log(`Sesión cerrada para el usuario ${this._nombre}`);
    }
}