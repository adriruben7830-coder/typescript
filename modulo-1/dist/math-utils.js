"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
// Calcula el ingreso medio de un array de proyectos
function calcularMedia(proyectos) {
    if (proyectos.length === 0)
        return null;
    const total = proyectos.reduce((suma, p) => suma + p.presupuesto, 0);
    return total / proyectos.length;
}
// Calcula la mediana de presupuestos
function calcularMediana(proyectos) {
    if (proyectos.length === 0)
        return null;
    const ordenados = [...proyectos].sort((a, b) => a.presupuesto - b.presupuesto);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1].presupuesto + ordenados[mitad].presupuesto) / 2;
    }
    return ordenados[mitad].presupuesto;
}
// Filtra proyectos atípicos cuyo presupuesto supera el límite dado
function filtrarAtipicos(proyectos, limite) {
    return proyectos.filter(p => p.presupuesto > limite);
}
