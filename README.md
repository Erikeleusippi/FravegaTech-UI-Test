
FravegaTech - UI Test (Cypress)

Este proyecto fue desarrollado como parte de un challenge técnico. Consiste en la automatización de pruebas de interfaz de usuario utilizando Cypress, aplicado al sitio web de Frávega.


Tecnologías utilizadas

- Cypress 12+
- Node.js
- JavaScript (ES6)
- Page Object Model

Requisitos
-Tener instalado Node.js (https://nodejs.org)
-Tener acceso a internet para ejecutar los tests

Instalación y ejecución

1.Abrir una terminal en la carpeta del proyecto.
2.Instalar las dependencias:

   npm install

3. Ejecutar Cypress en modo interactivo:

   npm run cypress:open

La carpeta node_modules no se incluye en el repositorio. Se genera automáticamente al correr `npm install`.


-Explicacion del test del punto 1: Búsqueda y Compra de Heladera Samsung

Este test automatizado verifica el flujo de búsqueda y compra de una heladera Samsung en Frávega:

- Realiza una búsqueda específica de "Heladera Samsung"
- Verifica la página de resultados de búsqueda
- Valida el segundo elemento de la búsqueda
- Selecciona un producto
- Verifica la página de detalles del producto
- Agrega el producto al carrito
- Confirma que el producto fue agregado correctamente
- Verifica la página del carrito
- Inicia el proceso de compra( se detiene en la carga del email por que el enunciado no especifica cargar los datos del comprador).

-Explicacion del Test del punto 2: Comparación y Compra de Productos

Este test automatizado verifica el flujo completo de comparación y compra de productos:

- Realiza una búsqueda de freidoras(es una variable puede buscar cualquier producto)
- Filtra productos por rango de precio y aplica dos condicionales mas
- Compara hasta 4 productos
- Valida la aplicación de cupones de descuento(es una variable por lo que se puede ingresar cupones validos e invalidos y al momento de aplicarlos obtengo una screenshot a modo de evidencia)
- Completa el proceso de compra con datos de prueba
- Verifica el pago con tarjeta de débito( solo carga el nombre y el numero de tarjeta invalido para mostrar el manejo del iframe dentro del sistema)
