import React from "react";
import Part from './part'
import CoursePart from "../type";

// interface course {
//   name: string,
//   exerciseCount: number,
// }

const Content = ({parts}: { parts: CoursePart[] } ) => {
  return (
    <div>
      {parts.map(part => <Part key={part.name} part={part} />)}
    </div>
  )
}

export default Content