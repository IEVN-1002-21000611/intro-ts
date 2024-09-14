class Punto {
    x: number;
    y: number;
    x1: number;
    y1: number;

    constructor(x: number, y: number, x1: number, y1: number) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }

    calcularDistanciaAlCuadrado(): number {
        const distanciaAlCuadrado = Math.sqrt((this.x - this.x1) ** 2 + (this.y - this.y1) ** 2);
        return distanciaAlCuadrado;
    }
}
const punto1 = new Punto(-4, -3, 2, 5);

const distanciaAlCuadrado = punto1.calcularDistanciaAlCuadrado();
console.log(`La distancia al cuadrado entre los puntos es ${distanciaAlCuadrado}`);
