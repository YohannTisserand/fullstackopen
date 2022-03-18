import React from 'react'

export const Person = ({person, deleteUser}) => {
  return (
  <li>
    {person.name} {person.number} <button onClick={() => deleteUser(person.id)}>delete</button>
  </li>
  )
}
