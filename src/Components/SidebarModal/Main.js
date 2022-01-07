import React, { useContext } from "react";
import Modal from "./Modal";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
const Main = () => {
  const { openModal, openSidebar } = useGlobalContext();
  // console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => openModal()}>
        show modal
      </button>
    </main>
  );
};

export default Main;
