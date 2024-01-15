import useEffectOnUpdate from "./useEffectOnUpdate";
import { useState } from "react";

export default function useHover({ ref, onHover, onLeave }) {
  const [isHovered, setIsHovered] = useState(false);
  useEffectOnUpdate(() => {
    const handleMouseOver = () => {
      const isHoveringInside = ref.current.contains(event.relatedTarget);
      if (!isHovered && !isHoveringInside) {
        setIsHovered(true);
        if (onHover) {
          onHover();
        }
      }
    };

    const handleMouseOut = () => {
      const isLeavingOutside = !ref.current.contains(event.relatedTarget);
      if (isHovered && isLeavingOutside) {
        setIsHovered(false);
        if (onLeave) {
          onLeave();
        }
      }
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
  }, [ref, onHover, isHovered]);

  return isHovered;
}
