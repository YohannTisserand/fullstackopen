import React from "react";
import CoursePart from "../type";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: { part: CoursePart }) => {
  switch(part.type) {
    case 'normal':
      return (
          <p><strong>{part.name} {part.exerciseCount}</strong><br />
          <em>{part.description}</em></p>
      );
      break;
    case 'groupProject':
      return (
          <p><strong>{part.name} {part.exerciseCount}</strong><br /> 
          <em>Project Exercise {part.groupProjectCount}</em></p>
        
      );
    case 'submission':
      return (
        <p>
          <strong>{part.name} {part.exerciseCount}</strong><br /> 
          <em>{part.description}</em><br />
          submit to {part.exerciseSubmissionLink}
        </p>
      )
    case 'special':
      return (
        <p>
          <strong>{part.name} {part.exerciseCount}</strong><br /> 
          <em>{part.description}</em><br />
          skill required:{' '}
						{part.requirements.map((r) => (
							<span key={r}>{r}, </span>
						))}{' '}
        </p>
      )
    default: 
      return assertNever(part);
  }
}

export default Part;