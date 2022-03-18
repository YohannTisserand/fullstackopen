import React from "react";
import { Person } from "./person";

const Content = ({persons, deleteUser}) => {
  return (
  <ul>
    {persons.map((person, i) => 
    <Person key={i} person={person} deleteUser={deleteUser} />)}
  </ul>
  )
}

export default Content
