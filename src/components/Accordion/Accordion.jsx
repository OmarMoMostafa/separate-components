import React, { useState } from "react";
import "./accordion.css";
const faq = [
  {
    q: "how are you",
    a: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    q: "how old are you",
    a: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    q: "how high are you",
    a: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
];

function Accordion() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="accordion">
      {faq.map((item, i) => {
        return (
          <Item
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            num={i + 1}
            head={item.q}
            body={item.a}
            key={item.q}
          />
        );
      })}
    </div>
  );
}

function Item({ head, body, num, activeItem, setActiveItem }) {
  const isActive = activeItem === num;

  return (
    <div className={`acc-item ${isActive ? "active" : ""}`}>
      <div className="acc-header">
        <h3>
          <span className="num">{num < 9 ? "0" + num : num}</span>
          {head}
        </h3>
        <div
          className="icon"
          onClick={() => {
            !isActive ? setActiveItem(num) : setActiveItem(null);
          }}
        >
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && <p className="acc-body">{body}</p>}
    </div>
  );
}

export default Accordion;
