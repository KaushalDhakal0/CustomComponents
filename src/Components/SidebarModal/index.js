import React from "react";
import Main from "./Main";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./index.css";

const SidebarModal = () => {
  return (
    <>
      <Main />
      <Modal />
      <Sidebar />
    </>
  );
};
export default SidebarModal;
