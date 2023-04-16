import React from "react";
import Courses from "./components/Courses";
import { useCurrCourse } from "./context/currencies-context";

const Store = () => {
  const { currency, course, setChangeCurr } = useCurrCourse();

  return (
    <div className="container">
      <div className="d-flex flex-column ">
        <h4 className="mb-2">Change Currency:</h4>
        <div>
          {Object.values(currency).map((cur) => (
            <button
              className="btn btn-light"
              key={cur.label}
              onClick={() => setChangeCurr(cur)}
            >
              {cur.code}
            </button>
          ))}
        </div>
      </div>
      <header className="text-center my-4">
        <h1 className="title fs-xl">Course</h1>
        <h2 className="text-uppercase">BECOME A WEB DEVELOPER</h2>
        <p className="mx-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse
          magnam, placeat distinctio iste eius nisi sit. Nam provident quidem
          fugit consectetur recusandae similique debitis.
        </p>
      </header>
      <Courses courses={course} />
    </div>
  );
};

export default Store;
