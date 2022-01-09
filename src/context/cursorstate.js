import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export function AppWrapper({ children }) {
  const [cursorState, setCursorState] = useState("default");
  const [cursorText, setCursorText] = useState("");

  let sharedState = {
    /* whatever you want */
  };

  return (
    <CursorContext.Provider
      value={{ cursorState, setCursorState, cursorText, setCursorText }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorContext() {
  return useContext(CursorContext);
}
