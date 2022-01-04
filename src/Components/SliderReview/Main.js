import React, { useEffect, useState } from "react";

import data from "./data";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Main = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    index < people.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const handleLeft = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };
  useEffect(() => {
    console.log(people);
  });
  return (
    <section className="section">
      <div className="title">
        <h2 className="title">
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //more...
          let position = "nextSlide";
          if (personIndex === index) {
            position = "active";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft onClick={() => handleLeft()} />
        </button>
        <button className="next">
          <FiChevronRight onClick={() => handleRight()} />
        </button>
      </div>
    </section>
  );
};

export default Main;
