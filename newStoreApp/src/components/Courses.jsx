import React from "react";
import Course from "./Course";

export default function Courses({ courses }) {
  return (
    <ul className="d-flex mt-2" style={{ flexWrap: "wrap", gap: 50 }}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </ul>
  );
}
