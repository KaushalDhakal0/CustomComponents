import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

import "./index.css";

const MainNav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(false);
  // console.log(links, social);

  useEffect(() => {
    const linkSHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linkSHeight);
    if (showLinks) {
      console.log(linkSHeight);
      linksContainerRef.current.style.height = `${linkSHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className=" links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((data) => {
              return (
                <li key={data.id}>
                  <a href={data.url}>{data.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((data) => {
            return (
              <li key={data.id}>
                <a href={data.url}>{data.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
