# Ejercicio guía telefónica de la parte 2 desde cero
Borro todos los archivos de la carpeta src excepto index.js e index.css
El punto de partida es el componente App, para el que se crea el archivo App.js dentro de src
En el archivo index.js se importa App.js y un par de librerías más. Además de eso solo figura la instrucción de renderizado de la app
Para desarrollar el ejercicio 2.6 solo hay hacer los mismos pasos que se desarrollan en la lección sobre formularios en el ejemplo sobre el cuaderno de notas.
Creo src/components/Person.js
Al final de cada archico de la aplicación incluyo una descripción detallada sobre el código. Hasta ahora tengo hechos: App.js, Person.js, 

# El primer commit es el ejercicio 2.6 terminado.
Este ejercicio consiste en mostrar por pantalla la lista de nombres de la agenda y permitir la incorporación de nuevos nombres desde el formulario. La app no se almacena en ninguna base de datos, por lo que todos los cambios que hagamos desaparecen al refrescar la página.
He subido el commit a GitHub y allí aparecen dos, ya que por defecto se creo el primero al crear la aplicación. Aquí no se cómo hacer para ver versiones anteriores del código sin cargarme lo nuevo, pero en GitHub es bastante fácil navegar entre el código de los distintos commit. Todo esto que escribo todavía no aparece en GitHub, será parte del siguiente commit

# Segundo commit: ejercicio 2.7 terminado
Ahora debemos incorporar la funcionalidad de que si queremos introducir un nombre repetido en la agenda, este no se introduzca y en su lugar aparezca un mensaje de alerta.

# Tercer commit: ejercicios 2.8 y 2.9 terminado
Hay que hacer dos cosas: agregar un nuevo input para introducir el número de teléfono de cada persona (y que se muestre en el render) e incluir un campo de búsqueda que permita seleccionar a las personas por nombre.

# Cuarto: ejercicio 2.11 (el 2.10 es dividir en componentes, no lo hago)
El ejercicio consiste en obtener los datos de un servidor externo, en este caso db.json en el puerto 3001, según se explica en la parte de teoría. Para resolver esto voy siguiendo los mismos pasos que se describen en el ejemplo de las notas:
1.- Crear el archivo db.json en la raíz del proyecto
2.- Instalar axios para controlar la comunicación con el servidor
3.- Instalar json-server como una dependencia para el desarrollo e instalar un script para iniciar el json-server de modo sencillo
Con estos pasos tenemos abierto el documento con los datos en el puerto 3001 para su consulta, pero queda obtener los datos del documento para que estén disponibles en la aplicación, para lo cual se utiliza un hook de efecto.

# Quinto: ejercicio 2.15 (2.12 a 2.14 tratan sobre la aplicación de países)
Ahora se trata de que las nuevas personas introducidas permanezcan en el servidor json.

# Sexto: ejercicio 2.17 (2.16 es para sacar componentes, no lo hago)
Se trata de permitir la eliminación de elementos de la lista. Para ello aparecerá un botón junto a cada entrada, que permita su eliminación. Antes de eliminar un usuario, debe aparecer una ventana de confirmación.