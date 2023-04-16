import React, { useEffect, useState } from "react";
import { useCurrCourse } from "../context/currencies-context";

export default function Course({ course }) {
  const [courseBg, setCourseBg] = useState();

  const { changeCurr } = useCurrCourse();

  const { title, img, price } = course;

  //change currencies
  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: changeCurr.code,
  }).format(price * changeCurr.conversionRate);

  //Change background-color
  useEffect(() => {
    switch (changeCurr.code) {
      case "USD":
        setCourseBg("card-accept");
        break;
      case "EUR":
        setCourseBg("card-info");
        break;
      case "GBP":
        setCourseBg("card-warning");
        break;
      default:
    }
  }, [changeCurr.code]);

  return (
    <li className={`card ${courseBg}  mb-2`}>
      <div className="card-header">{title}</div>
      <img src={img} alt="course-img course img" />
      <p className="card-body bg-dark">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eligendi
        similique, autem velit animi soluta in dicta optio quae voluptates
        maiores !
      </p>
      <div className="card-footer d-flex space-between">
        <h4>{contextPrice}</h4>
        <button className="btn btn-light">Buy</button>
      </div>
    </li>
  );
}
