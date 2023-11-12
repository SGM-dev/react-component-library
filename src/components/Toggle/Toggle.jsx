import { useState } from "react";

export default function Toggle({ children }) {
  const [on, setOn] = useState(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return children
}
