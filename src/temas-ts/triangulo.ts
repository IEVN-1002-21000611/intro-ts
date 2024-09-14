class Punto {
    constructor(public x: number, public y: number) {}
}

function formanTriangulo(p1: Punto, p2: Punto, p3: Punto): boolean {
    const area = 0.5 * Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)));
    return area > 0;
}

// Puntos que forman un triángulo
const puntoA = new Punto(1, 1);
const puntoB = new Punto(2, 2);
const puntoC = new Punto(3, 3);

const formanTrianguloABC = formanTriangulo(puntoA, puntoB, puntoC);
console.log(`Los puntos forman un triángulo: ${formanTrianguloABC}`);

// Puntos que no forman un triángulo
const puntoD = new Punto(1, 1);
const puntoE = new Punto(2, 2);
const puntoF = new Punto(3, 4);

const formanTrianguloDEF = formanTriangulo(puntoD, puntoE, puntoF);
console.log(`Los puntos forman un triángulo: ${formanTrianguloDEF}`);
