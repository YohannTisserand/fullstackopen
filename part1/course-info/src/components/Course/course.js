import React from "react";
import { Header } from "../header";
import { Content } from "./content";
import { Total } from "../total";

export const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
