import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./Star.css";

export default function Star() {
  const [starred, setStarred] = useState(false);

  function toggle() {
    setStarred((prev) => !prev);
  }

  return starred ? (
    <BsStarFill className="star filled" onClick={toggle} />
  ) : (
    <BsStar className="star " onClick={toggle} />
  );
}