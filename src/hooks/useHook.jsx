import useEffectOnUpdate from "./useEffectOnUpdate";
import { useState } from "react";

export default function useHover({ ref, onHover }) {
  const [isHovered, setIsHovered] = useState(false);
  useEffectOnUpdate(() => {
    const handleMouseOver = () => {
      setIsHovered(true);
      if (isHovered) {
        onHover();
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, onHover]);

  return isHovered;
}
