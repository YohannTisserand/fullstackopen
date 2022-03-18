import { Part } from "./part";

export const Content = ({ course }) => {
  let parts = course["parts"];
  const [part1, part2, part3] = parts;

  return (
    <>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </>
  );
};