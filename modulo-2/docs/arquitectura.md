# Arquitectura Módulo 2 — MØRK Studio CRM

## Decisiones de diseño

### Por qué `interface` para Cliente y Proyecto
Usamos `interface` porque representan entidades del dominio — objetos con estructura
jerárquica clara. Permiten extensión futura sin romper el código existente.

### Por qué `type` para EstadoProyecto
Usamos `type` para la unión discriminada porque `type` permite definir uniones (`|`)
entre múltiples interfaces. Con `interface` esto no es posible.

### Unión Discriminada — EstadoProyecto
La propiedad `tipo` actúa como discriminante. TypeScript sabe exactamente qué
propiedades existen en cada rama del switch sin necesidad de comprobaciones manuales.
Esto elimina errores de runtime como acceder a `facturaTotal` en un proyecto en PROPUESTA.

### Genérico `RespuestaAPI<T>`
Permite tipar la respuesta de red de forma reutilizable. El mismo wrapper sirve para
`RespuestaAPI<Proyecto>`, `RespuestaAPI<Cliente>` o cualquier entidad futura,
sin duplicar código ni perder seguridad de tipos.

### Genérico `obtenerRecurso<T>`
Abstrae la lógica de consulta a base de datos. El tipo de retorno `Promise<RespuestaAPI<T>>`
garantiza que quien consuma el método recibe exactamente el tipo que espera.