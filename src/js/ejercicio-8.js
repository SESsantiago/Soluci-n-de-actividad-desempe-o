function iniciarControlCalidad() {
  // 1. Inicialización de contadores
  let totalChips = 0;
  let conteoReciclaje = 0;
  let conteoMinorista = 0;
  let conteoEmpresarial = 0;

  console.log("--- ESCÁNER DE MICROCHIPS CIBERPUNK ACTIVADO ---");

  // 2. Bucle de entrada de datos
  while (true) {
    let entrada = prompt(
      "Ingrese el puntaje de integridad del chip (1-100).\n" +
      "Ingrese un número negativo (ej. -1) para cerrar el lote."
    );

    // Convertir entrada a número
    let puntaje = parseFloat(entrada);

    // Condición de salida: Número negativo
    if (puntaje < 0) {
      break; 
    }

    // Validación: Si no es un número, está vacío o fuera del rango lógico (0-100)
    if (isNaN(puntaje) || entrada.trim() === "" || puntaje > 100) {
      alert("ERROR: Escaneo inválido. Pieza no contabilizada.");
      continue; // Salta a la siguiente iteración
    }

    // 3. Clasificación de los chips
    totalChips++; // Solo sumamos si el chip pasó la validación

    if (puntaje >= 1 && puntaje <= 49) {
      conteoReciclaje++;
      console.log(`Chip #${totalChips}: [Reciclaje]`);
    } else if (puntaje >= 50 && puntaje <= 89) {
      conteoMinorista++;
      console.log(`Chip #${totalChips}: [Minorista]`);
    } else if (puntaje >= 90 && puntaje <= 100) {
      conteoEmpresarial++;
      console.log(`Chip #${totalChips}: [Empresarial]`);
    } else if (puntaje === 0) {
      // Caso borde: un chip con 0 de integridad también es reciclaje
      conteoReciclaje++;
      console.log(`Chip #${totalChips}: [Reciclaje Crítico]`);
    }
  }

  // 4. Generación del reporte final
  if (totalChips === 0) {
    alert("No se procesaron chips en este lote.");
    return;
  }

  // Cálculo del porcentaje de defectuosos
  let porcentajeReciclaje = (conteoReciclaje / totalChips) * 100;

  console.log("--- REPORTE DE LOTE FINALIZADO ---");
  console.log(`Total de chips escaneados: ${totalChips}`);
  console.log(`- Reciclaje: ${conteoReciclaje}`);
  console.log(`- Minorista: ${conteoMinorista}`);
  console.log(`- Empresarial: ${conteoEmpresarial}`);
  console.log(`Porcentaje de piezas defectuosas: ${porcentajeReciclaje.toFixed(2)}%`);

  // 5. Condición especial del memorándum
  if (porcentajeReciclaje > 30) {
    console.warn("!!! MEMORÁNDUM DE GERENCIA !!!");
    console.warn("ALERTA: El nivel de fallos es inaceptable. Se sugiere el despido inmediato del supervisor de planta.");
    alert("REPORTE GENERADO: Crítico. Revise la consola.");
  } else {
    alert("REPORTE GENERADO: Operación dentro de los parámetros normales.");
  }
}

// Iniciar el programa
iniciarControlCalidad();