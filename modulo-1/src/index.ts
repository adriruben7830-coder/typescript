import { Proyecto, calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils.js";

const proyectos: Proyecto[] = [
  { id: "MRK-001", nombre: "Web 3D Lamborghini", cliente: "Lamborghini España", presupuesto: 8500, diasEntrega: 30 },
  { id: "MRK-002", nombre: "Landing Hotel Arts", cliente: "Hotel Arts Barcelona", presupuesto: 4200, diasEntrega: 15 },
  { id: "MRK-003", nombre: "Branding Restaurante Enigma", cliente: "Enigma BCN", presupuesto: 2800, diasEntrega: 10 },
  { id: "MRK-004", nombre: "Web Arquitectura Fran Silvestre", cliente: "Fran Silvestre", presupuesto: 12000, diasEntrega: 45 },
  { id: "MRK-005", nombre: "Lookbook Moda Acne Studios", cliente: "Acne Studios", presupuesto: 6300, diasEntrega: 20 },
];

const media = calcularMedia(proyectos);
const mediana = calcularMediana(proyectos);
const atipicos = filtrarAtipicos(proyectos, 7000);

console.log("=== MØRK STUDIO — Análisis Financiero ===");
console.log(`Ingreso medio por proyecto: ${media}€`);
console.log(`Mediana de presupuestos: ${mediana}€`);
console.log(`Proyectos por encima de 7000€:`);
atipicos.forEach(p => console.log(`  - ${p.nombre}: ${p.presupuesto}€`));