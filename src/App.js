import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {    
      event.preventDefault()    
      const personObject = {
          name: newName,
          id: persons.length + 1,
        }
        setNewName('')
        for (let i = 0; i < persons.length; i++) {    
          if (newName === persons[i].name) {alert(`${newName} ya existe en la agenda`)
                                            break} 
          else {if (i === persons.length-1)
                setPersons(persons.concat(personObject))}
        }
      }

  const handleNameChange = (event) => {      
      setNewName(event.target.value)  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id}  person={person.name} />
        )}
      </ul>
    </div>
  )
}

export default App

/* Explicación ejercicio 2.6
/
/  En la línea 1 hay dos importaciones: la primera es estándar, y la segunda importa el hook de estado (useState). Un hook es una 
/  función especial que permite conectarse a ciertas características de React. Es algo que antes de la versión 16.8 de React se hacía
/  con clases, pero ahora se hace de forma más sencilla.
/  En la línea 2 se importa con componente. Los componentes son el centro de React. Cada aplicación consta de muchos componentes. De 
/  momento, esta aplicación solo tiene dos componentes: Person.js y App.js. Los componentes se encuentran en la carpeta components
/ excepto App.js que va directamente en la carpeta src.
/
/  En las líneas 4 a 9 se definen los dos hooks de estado que se utilizan: el primero hace el seguimiento de la agenda y el segundo
/  controla la incorporación de nuevas personas a la agenda. useState tiene un valor inicial, que es el que aparece entre parántesis,
/  y devuelve dos valores, el primero es el valor actual de estado y el segundo el nuevo valor del estado. Los nombres de estos 
/  valores podemos escojerlos como queramos.
/
/  Entre las líneas 12 y 20 se define la función de flecha addPerson, que se ejecuta al pulsar el botón del formulario. La          /  instrucción event.preventDefault() sirve para que la página se recarge al pulsar el botón (que sería el comportamiento            /  predeterminado). Después, en las líneas 14 a 17, se define un objeto para almacenar los datos de cada persona de la agenda.
/  En la línea 18 se actualiza el valor de persons (de una de las variables de hook de estado) concatenando el valor del objeto
/  personObject al estado anterior. En la línea 19 se reestablece el valor de la otra variable (newName) de estado.
/
/  Entre las líneas 22 y 24 se define la función de flecha handleNameChange, que sirve para manejar la edición de la ventana del 
/  nombre del formulario. La línea 23 es prescindible, solo reproduce en la consola el valor que haya escrito en la ventana. La línea
/  24 asigna el valor escrito en la ventana al valor de la variable de estado newName. Esta función de flecha tiene sentido junto a 
/  línea 33.
/
/  Entre las líneas 26 y 46 se define lo que va a renderizar la aplicación. Aunque todo parece HTML, en realidad es jsx, que se 
/  transpila a javaScript. Lo bueno es que puede interpretarse como si fuese HTML, por ello no son necesarias muchas explicaciones.
/  La única parte que precisa de comentarios son las líneas 41 y 42, que sirven para representar la agenda en la pantalla. La función
/  map nos permite recorrer el array persons según las indicaciones que se hagan en la propia función de flecha. En este caso, la
/  instrucción es representar el componente Person utilizando dos datos: el nombre y el id. Para saber qué se va a representar con
/  exactitud hay que consultar el archivo del componente Person, sin embargo, el valor de key no aparece definido en Person ni se 
/  representa en pantalla, solamente se incluye porque React da un error ni no asociamos una clave a los elementos generados en una
/  lista.
/
/  Finalmente, en la línea 49 se exporta el componente App para que pueda ser utilizado en otra parte.
/
/  Explicación ejercicio 2.7
/
/  Se añaden las líneas 19 a 24 para evitar que se introduzcan nombres repetidos en la agenda. Se hace un bucle sobre persons que se 
/  detiene en caso de encontrar un nombre repetido, mostrando un mensaje de alerta, pero si el buble llega al final, enconces el
/  nuevo nombre se añade a la agenda.
/
/
/
/
/*/

