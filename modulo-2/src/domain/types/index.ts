// ============================
// ENTIDADES DEL DOMINIO MØRK
// ============================

export interface Cliente {
  readonly id: string;
  nombre: string;
  sector: "automocion" | "hoteleria" | "moda" | "arquitectura" | "restauracion";
  email: string;
  telefono?: string;
}

export interface Proyecto {
  readonly id: string;
  nombre: string;
  clienteId: string;
  presupuesto: number;
  fechaInicio: Date;
}

// ============================
// UNIÓN DISCRIMINADA — Estados de proyecto
// ============================

export interface ProyectoEnPropuesta {
  tipo: "PROPUESTA";
  presupuestoEstimado: number;
}

export interface ProyectoEnDesarrollo {
  tipo: "DESARROLLO";
  fechaEntrega: Date;
  porcentajeCompletado: number;
}

export interface ProyectoFinalizado {
  tipo: "FINALIZADO";
  facturaTotal: number;
  valoracionCliente: number; // del 1 al 10
}

export type EstadoProyecto =
  | ProyectoEnPropuesta
  | ProyectoEnDesarrollo
  | ProyectoFinalizado;

// ============================
// RESPUESTA GENÉRICA DE API
// ============================

export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}