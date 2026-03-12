Desarrollo de ejercicio desempeño 

Descripción de los Ejercicios Desarrollados
Este proyecto contiene la resolución de dos ejercicios lógicos prácticos implementados en JavaScript puro (sin manipulación del DOM), simulando entornos temáticos interactivos a través de mensajes de consola (console.log), ventanas emergentes de entrada (prompt) y confirmaciones (confirm).

Ejercicio #7: El Convoy de Suministros Post-Apocalíptico
Una simulación de gestión de recursos donde el usuario conduce un camión blindado. El programa calcula el consumo de combustible basándose en la distancia y el tipo de terreno (pavimento, terracería, pantanoso). Implementa lógica para:

Finalizar el viaje si el combustible calculado es insuficiente antes de llegar.

Emitir alertas de reserva baja (menos del 20%).

Permitir el repostaje en refugios sin superar la capacidad máxima del tanque.

Generar un reporte final al terminar la ruta.

Ejercicio #8: Control de Calidad en la Fábrica de Microchips
Un sistema de clasificación de piezas con temática ciberpunk. El programa permite ingresar puntajes de integridad de chips de forma continua y los clasifica en categorías: "Reciclaje", "Minorista" o "Empresarial". Implementa lógica para:

Validar entradas (solo números válidos).

Cerrar lotes de producción con un número negativo.

Generar un reporte consolidado con estadísticas detalladas y porcentajes.

Emitir una alerta de "memorándum" si el porcentaje de piezas defectuosas supera un umbral crítico.

Cómo Ejecutar el Proyecto Localmente
Para trabajar con estos ejercicios en tu máquina, sigue estos pasos:

Clonar el repositorio: Abre una terminal y ejecuta el siguiente comando para descargar el proyecto:

Bash

git clone https://github.com/SESsantiago/Soluci-n-de-actividad-desempe-o.git


Abrir los archivos: Una vez clonado, puedes abrir la carpeta del proyecto en tu editor de código preferido (como VS Code) o abrir directamente los archivos HTML en tu navegador.

Estructura de Directorios y Archivos
El proyecto está organizado de la siguiente manera, como se muestra en la estructura de carpetas:

Plaintext

/public                <- Carpeta con archivos públicos (opcional, no usada para la lógica)
/src                   <- Carpeta principal del código fuente
├── css                <- Estilos (si los hay)
├── html               <- Contiene vistas adicionales
│   └── ejercicio-8.html  <- Página para ejecutar el Ejercicio #8
├── js                 <- **Toda la lógica de los ejercicios**
│   ├── ejercicio-7.js   <- Lógica y funciones del Ejercicio #7
│   └── ejercicio-8.js   <- Lógica y funciones del Ejercicio #8
├── index.html         <- Página principal del proyecto. **Aquí está ubicado el Ejercicio #7**
└── README.md          <- Este archivo
Para probar el Ejercicio #7: Abre el archivo index.html en tu navegador. La lógica está enlazada al archivo src/js/ejercicio-7.js.

Para probar el Ejercicio #8: Navega dentro del proyecto y abre el archivo src/html/ejercicio-8.html en tu navegador. La lógica está enlazada al archivo src/js/ejercicio-8.js.

Nombre: Santiago Espinosa San Martin
C.c: 1033178592