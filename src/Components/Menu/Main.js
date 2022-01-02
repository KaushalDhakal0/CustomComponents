import React, { useState } from "react";
import items from "./data";
import "./index.css";
const Main = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);
  return (
    <main>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
        <Category />
        <Menu items={menuItems} />
      </div>
    </main>
  );
};

const Category = () => {
  return <div>Category</div>;
};

const Menu = ({ items }) => {
  // console.log(items);

  return (
    <div className="menu">
      {items.map((item) => {
        const { id, title, category, price, img } = item;
        return (
          <>
            <h1>{title}</h1>
            <img src={require(`./images/item-${id}.jpeg`)} width={"40%"} />
          </>
        );
      })}
    </div>
  );
};

export default Main;
