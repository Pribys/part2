import React from 'react'

const Person = ({person}) =>
  <li>
    {person}
  </li>

export default Person

/*
/  Explicación
/  En las líneas 1 y 8 se hace la import, export estándar.
/
/  En las líneas 3 a 6 se crea el componente, que es autoexplicativo por sí mismo. Pero hay una cosa curiosa: el dato que recibe la 
/  función de flecha tiene que llamarse person pero no tengo claro por qué. Por ejemplo, aunque este componente se utiliza en la 
/  línea 42 de componente App y en aquel también aparece person, si allí cambiamos person por botijo, todo sigue funcionando bien,
/  pero si aquí cambiamos person por otro nombre, aunque la app no se rompe, no aparece en pantalla la el nombre de cada parsona.
/
/*/