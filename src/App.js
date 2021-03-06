import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newNumber }

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
        if (window.confirm(`${newName} ya está en la agenda, ¿quieres cambiar su número?`)) {
          const persona = persons
            .filter((person) =>
              person.name.toLowerCase().includes(newName.toLowerCase())
            )
          const cambiarNumero = { ...persona[0], number: newNumber }
          axios
            .put(`http://localhost:3001/persons/${persona[0].id}`, cambiarNumero)
            .then(hookEfecto)
          setNewName("")    
          setNewNumber("")
        } 
        setNewName("")    
        setNewNumber("")
        return
    }
    
    axios
    .post('http://localhost:3001/persons', newPerson)
    .then(response => {
      setPersons(persons.concat(response.data))      
      setNewName("")    
      setNewNumber("")
    })
  };

  const hookEfecto = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hookEfecto, [])

  const eliminarPersona = (filteredPerson) => {
    if (window.confirm(`¿Quieres eliminar a ${filteredPerson.name}?`)) {
      axios
     .delete(`http://localhost:3001/persons/${filteredPerson.id}`, filteredPerson.id)
     .then(hookEfecto)
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          Name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((filteredPerson) => {
          return (
            <p key={filteredPerson.id}>
              {filteredPerson.name} {filteredPerson.number}
              {" "}<button onClick={() => eliminarPersona(filteredPerson)}>Eliminar</button>
            </p>
          );
        })}
    </div>
  );
};

export default App;

/* Explicación ejercicios 2.8 y 2.9
/
/  En líneas 4 a 9 aparecen los datos de prueba para el ejercicio. Esto junto a las líneas 10, 11 y 12 son los hooks de estado de la 
/  aplicación (Un Hook es una función especial que permite “conectarse” a características de React. Por ejemplo, useState es un Hook /  que te permite añadir el estado de React a un componente de función)
/  Entre las líneas 14 y 44 tenemos varios controladores de eventos. Los tres primeros son bastante fáciles de entender, solo
/  establecen un valor para la correspondiente variable de estado a partir de los cambios en un input. El cuarto controlador hace más
/  cosas. La línea 27 impide que se produzca el comportamiento por defecto al pulsar un botón, que es recargar la página. El if de la
/  línea 29 sirve para impedir que se añada una nueva entrada a la lista si el nombre ya está registrado. El método de array some()
/  comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Si el if no se 
/  cumple, no salta el return y se añade una nueva persona a la lista.
/  La línea 46 es estándar. Lo que haya dentro del return de app es lo que se representará en pantalla. Entre las líneas 48 y 63
/  aparecen todas las referencias necesarias para que funcionen los controladores de eventos. 
/  La parte más compleja está entre las líneas 66 y 76. El método filter() crea un nuevo array con todos los elementos que cumplan 
/  la condición implementada por la función dada. El método includes() determina si una matriz incluye un determinado elemento, 
/  devuelve true o false según corresponda. Dentro del includes "filter" es el nombre de la variable de estado, no del método 
/  descrito anteriormente. El método map transforma los elementos de un array uno por uno aplicándoles una función en base al 
/  elemento y a su posición, dicha función es programada por nosotros de acuerdo a la necesidad, es decir, podemos usar 
/  condicionales y distintas herramientas que la programación nos permita ejecutar siempre y cuando se ejecuten de forma síncrona.
/  En el map se ha seguido la notación larga de la función de flecha, pero se podía abreviar y no incluir el return.
/
/  Explicación ejercicio 2.11
/  Se borran los datos de la matriz persons, que ahora se obtendrán del servidor. Se utiliza el hook de efecto para la comunicación 
/  con el servidor, tal como vemos en las líneas 42 a 52 
/  
/  Explicación ejercicio 2.15
/  Entre las líneas 22 a 40, tal como queda el código antes de cambiar nada en este ejercicio, tenemos el componente que se encarga 
/  de añadir una nueva persona pero, tal como está, se pierde al refrescar la pantalla. Para conservarlo en el archivo json, debemos
/  echar mano del método POST y axios. Lo nuevo son las líneas 37, 38 y 39. Por otra parte, hay varias líneas del hook de efecto que 
/  ya no son necesarias.
/
/  Explicación ejercicio 2.17
/  En la línea 92 se llama a la función que se encarga de eliminar el dato. La llamada debe identificar el dato que se quiere 
/  eliminar. La función eliminarPersona es sencilla pero tuve bastantes dificultades hasta descubrir cómo escribir correctamente
/  el argumento del delete. Finalmente, la llamada al hook de efecto es para refrescar la pantalla con los datos nuevos.
/
/  Ejercicio 2.18
/  Para que aparezca un mensaje de confirmación antes de eliminar una persona he tenido que cambiar el argumento que envía la función
/  eliminarPersona(), de modo que ahora envía el objeto completo, ya que en la definición de la función ya no se utiliza solo el id
/  sino que también se utiliza el nombre.
/  El código entre las líneas 31 y 45 sirve para que se pueda cambiar el teléfono de una persona que ya aparece en la agenda. He 
/  tenido que subir la definición de newPerson para poder utilizarla en esta parte. Las líneas 32 a 35 sirven para seleccionar a la
/  persona que hemos introducido. La línea 36 coge el objeto correspondiente a la persona en cuestión y cambia la propiedad que se 
/  indica (el número de teléfono). Luego, para llevar el cambio al servidor se utiliza el método put.
/
/
/
*/