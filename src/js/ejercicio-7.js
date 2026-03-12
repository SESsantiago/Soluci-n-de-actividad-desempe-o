function iniciarConvoy() {
    // 1. Configuración inicial del tanque
    let entradaCapacidad = prompt("¿Cuál es la capacidad máxima de tu tanque de combustible en litros?");
    let capacidadMaxima = parseFloat(entradaCapacidad);

    // Validación rápida por si el usuario cancela o no pone un número
    if (isNaN(capacidadMaxima) || capacidadMaxima <= 0) {
        console.log("Capacidad inválida. Simulador terminado.");
        return;
    }

    let tanqueActual = capacidadMaxima; // Arranca al 100%
    let refugiosVisitados = 0;

    // 2. Ciclo principal de expediciones
    while (true) {
        let entradaDistancia = prompt("Ingresa la distancia al siguiente refugio en km (o escribe 'TERMINAR RUTA' para salir):");

        // Condición de salida si el jugador decide terminar
        if (entradaDistancia === null || entradaDistancia.toUpperCase() === "TERMINAR RUTA") {
            console.log(`--- REPORTE FINAL DEL CONVOY ---`);
            console.log(`Combustible restante: ${tanqueActual.toFixed(2)} litros.`);
            console.log(`Refugios visitados con éxito: ${refugiosVisitados}.`);
            alert("Misión finalizada. Revisa la consola para ver el reporte.");
            break;
        }

        let distancia = parseFloat(entradaDistancia);
        if (isNaN(distancia) || distancia <= 0) {
            alert("Distancia no válida, por favor ingresa un número.");
            continue; // Salta esta iteración y vuelve a preguntar
        }

        // 3. Selección de terreno y cálculo de consumo
        let terreno = prompt("¿Qué tipo de terreno vas a cruzar?\nEscribe: 'Pavimento', 'Terracería' o 'Pantanoso'").toLowerCase();

        let consumoPorKm = 0;
        if (terreno === 'pavimento') {
            consumoPorKm = 1;
        } else if (terreno === 'terracería' || terreno === 'terraceria') {
            consumoPorKm = 2; // Soporta con o sin tilde por comodidad del usuario
        } else if (terreno === 'pantanoso') {
            consumoPorKm = 3;
        } else {
            alert("Tipo de terreno no reconocido. Se cancela este viaje, intenta de nuevo.");
            continue;
        }

        let combustibleNecesario = distancia * consumoPorKm;

        // 4. Verificación de supervivencia al viaje
        if (combustibleNecesario > tanqueActual) {
            alert("El convoy ha quedado varado por falta de cálculo");
            console.log("Fin del juego: Te quedaste sin combustible a mitad del páramo.");
            break; // El juego termina inmediatamente
        }

        // Si llegamos hasta aquí, el viaje fue exitoso
        tanqueActual -= combustibleNecesario;
        refugiosVisitados++;

        // 5. Alarma de reserva baja (< 20%)
        if (tanqueActual < (capacidadMaxima * 0.20)) {
            alert("Reserva baja: Busca combustible urgentemente");
        }

        // 6. Recolección de suministros (combustible) en el refugio
        let encontroCombustible = confirm("¡Llegaste al refugio! ¿Encontraste combustible para saquear?");
        if (encontroCombustible) {
            let litrosEncontrados = parseFloat(prompt("¿Cuántos litros encontraste?"));

            if (!isNaN(litrosEncontrados) && litrosEncontrados > 0) {
                tanqueActual += litrosEncontrados;

                // Evitar que el tanque supere su capacidad máxima
                if (tanqueActual > capacidadMaxima) {
                    tanqueActual = capacidadMaxima;
                    alert("El tanque se ha llenado al máximo. El exceso de combustible se derramó en la arena.");
                } else {
                    alert(`Repostaje exitoso. Tienes ${tanqueActual.toFixed(2)} litros en el tanque.`);
                }
            }
        }
    }
}

// Ejecutar el simulador
iniciarConvoy();