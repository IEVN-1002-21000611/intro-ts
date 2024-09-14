class Punto {
    constructor(protected x: number, protected y: number) {}

    calcularDistanciaAlCuadrado(otroPunto: Punto): number {
        const distanciaAlCuadrado = Math.sqrt((this.x - otroPunto.x) * (this.x - otroPunto.x) + (this.y - otroPunto.y) * (this.y - otroPunto.y));
        return distanciaAlCuadrado;
    }
}

const punto1 = new Punto(1, 2);
const punto2 = new Punto(4, 6);

const distanciaAlCuadrado = punto1.calcularDistanciaAlCuadrado(punto2);
console.log(`La distancia al cuadrado entre los puntos es ${distanciaAlCuadrado}`);
