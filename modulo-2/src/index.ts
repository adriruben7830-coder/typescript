import { EstadoProyecto, Proyecto, Cliente } from "./domain/types/index.js";
import { obtenerRecurso } from "./services/api-client.js";

// ============================
// FUNCIÓN CON UNIÓN DISCRIMINADA
// ============================

function generarReporte(estado: EstadoProyecto): string {
  switch (estado.tipo) {
    case "PROPUESTA":
      return `📋 PROPUESTA — Presupuesto estimado: ${estado.presupuestoEstimado}€`;
    case "DESARROLLO":
      return `⚙️  DESARROLLO — Entrega: ${estado.fechaEntrega.toLocaleDateString("es-ES")} | Completado: ${estado.porcentajeCompletado}%`;
    case "FINALIZADO":
      return `✅ FINALIZADO — Factura: ${estado.facturaTotal}€ | Valoración cliente: ${estado.valoracionCliente}/10`;
  }
}

// ============================
// DATOS DE PRUEBA
// ============================

const estados: EstadoProyecto[] = [
  {
    tipo: "PROPUESTA",
    presupuestoEstimado: 6000,
  },
  {
    tipo: "DESARROLLO",
    fechaEntrega: new Date("2026-05-01"),
    porcentajeCompletado: 65,
  },
  {
    tipo: "FINALIZADO",
    facturaTotal: 12000,
    valoracionCliente: 9,
  },
];

// ============================
// EJECUCIÓN
// ============================

console.log("=== MØRK STUDIO — Reportes de Proyectos ===\n");
estados.forEach((estado) => {
  console.log(generarReporte(estado));
});

// Servicio genérico con Promesas
console.log("\n=== Consultando base de datos ===");

obtenerRecurso<Proyecto>("MRK-001")
  .then((respuesta) => {
    console.log(`Proyecto encontrado: ${respuesta.datos.nombre} — ${respuesta.datos.presupuesto}€`);
  })
  .catch((error) => {
    console.error(`Error ${error.codigoEstado}: ${error.errores[0]}`);
  });

obtenerRecurso<Cliente>("CLI-001")
  .then((respuesta) => {
    console.log(`Cliente encontrado: ${respuesta.datos.nombre} — Sector: ${respuesta.datos.sector}`);
  })
  .catch((error) => {
    console.error(`Error ${error.codigoEstado}: ${error.errores[0]}`);
  });