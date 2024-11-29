import React from "react";

const Course = ({ course }) => {
  const total = course.parts.reduce((count, part) => count + part.exercises, 0);

  return (
    <>
      <h2>{course.name}</h2>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}

      <p>total of {total} exercises</p>
    </>
  );
};

export default Course;
