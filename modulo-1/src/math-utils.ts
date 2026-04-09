// Tipos base del dominio MØRK
export interface Proyecto {
  readonly id: string;
  nombre: string;
  cliente: string;
  presupuesto: number;
  diasEntrega: number;
}

// Calcula el ingreso medio de un array de proyectos
export function calcularMedia(proyectos: Proyecto[]): number | null {
  if (proyectos.length === 0) return null;
  const total = proyectos.reduce((suma, p) => suma + p.presupuesto, 0);
  return total / proyectos.length;
}

// Calcula la mediana de presupuestos
export function calcularMediana(proyectos: Proyecto[]): number | null {
  if (proyectos.length === 0) return null;
  const ordenados = [...proyectos].sort((a, b) => a.presupuesto - b.presupuesto);
  const mitad = Math.floor(ordenados.length / 2);
  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1].presupuesto + ordenados[mitad].presupuesto) / 2;
  }
  return ordenados[mitad].presupuesto;
}

// Filtra proyectos atípicos cuyo presupuesto supera el límite dado
export function filtrarAtipicos(proyectos: Proyecto[], limite: number): Proyecto[] {
  return proyectos.filter(p => p.presupuesto > limite);
}