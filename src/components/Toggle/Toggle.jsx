import { createContext } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
