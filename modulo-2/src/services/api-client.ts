import { RespuestaAPI } from "../domain/types/index.js";

// Simula una base de datos en memoria
const baseDatos: Record<string, unknown> = {
  "MRK-001": {
    id: "MRK-001",
    nombre: "Web 3D Lamborghini",
    clienteId: "CLI-001",
    presupuesto: 8500,
    fechaInicio: new Date("2026-01-15"),
  },
  "CLI-001": {
    id: "CLI-001",
    nombre: "Lamborghini España",
    sector: "automocion",
    email: "contacto@lamborghini.es",
  },
};

// Método genérico que simula una llamada a base de datos
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = baseDatos[endpoint];

      if (resultado) {
        resolve({
          codigoEstado: 200,
          exito: true,
          datos: resultado as T,
        });
      } else {
        reject({
          codigoEstado: 404,
          exito: false,
          datos: null,
          errores: [`Recurso '${endpoint}' no encontrado`],
        });
      }
    }, 500); // simula 500ms de latencia
  });
}