import React, { useState, useEffect } from "react";
import "./index.css";
import datas from "./data";

import { FaAngleDoubleRight } from "react-icons/fa";
//const url = "https://course-api.com/react-tabs-project";

const Port = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const handleFetch = () => {
    setTimeout(() => {
      setData(datas);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => handleFetch(), [data]);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading ......</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = data[index];
  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {data.map((job, idx) => {
            return (
              <button
                key={job.id}
                onClick={() => {
                  handleClick(idx);
                }}
                className={`job-btn ${idx === index && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* jobs info */}
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Port;
