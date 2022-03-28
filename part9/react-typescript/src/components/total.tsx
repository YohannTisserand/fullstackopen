import React from "react";

interface course {
  name: string,
  exerciseCount: number,
}

export const Total = ({ courseParts }: { courseParts: Array<course> }) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}

