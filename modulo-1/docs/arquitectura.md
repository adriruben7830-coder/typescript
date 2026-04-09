# Arquitectura Módulo 1 — MØRK Studio

## Decisiones de diseño

### Interface Proyecto
Usamos `interface` para definir la entidad base porque representa
un contrato estructural claro con propiedades bien definidas.
El campo `id` es `readonly` para evitar mutaciones accidentales.

### Funciones con retorno number | null
Las funciones `calcularMedia` y `calcularMediana` retornan `number | null`
en lugar de lanzar una excepción cuando el array está vacío.
Esto obliga al consumidor a manejar el caso límite explícitamente,
lo cual es más seguro que un crash en runtime.

### filtrarAtipicos
Recibe un límite numérico externo en lugar de calcularlo internamente,
lo que la hace más reutilizable y testeable sin depender de estado global.