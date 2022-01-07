import React, { useContext } from "react";
import Modal from "./Modal";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../../context";
const Main = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Main;
