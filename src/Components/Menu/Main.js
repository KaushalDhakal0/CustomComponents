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
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img
              src={require(`./images/item-${id}.jpeg`)}
              alt={title}
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Main;
