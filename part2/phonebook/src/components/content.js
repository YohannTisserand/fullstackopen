import React from "react";
import { Person } from "./person";

const Content = ({persons}) => {
  return (
  <ul>
    {persons.map((person, i) => 
    <Person key={i} person={person} />)}
  </ul>
  )
}

export default Content
