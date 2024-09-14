class Punto {
    constructor(
        protected x: number,
        protected y: number
    ) {}
}

class Triangulo extends Punto {
    constructor(
        protected x1: number,
        protected y1: number,
        protected x2: number,
        protected y2: number,
        x: number,
        y: number
    ) {
        super(x, y);
    }

    formanTriangulo(): boolean {
        const area = 0.5 * Math.abs((this.x * (this.y1 - this.y2) + this.x1 * (this.y2 - this.y) + this.x2 * (this.y - this.y1)));
        return area > 0;
    }
}

const puntoA = new Triangulo(8, 9, 2, 2, 3, 3);
const formanTrianguloABC = puntoA.formanTriangulo();
console.log(`Los puntos forman un triángulo: ${formanTrianguloABC}`);
