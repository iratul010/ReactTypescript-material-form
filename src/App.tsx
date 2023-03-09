import "./App.css";

import Box from "@mui/material/Box";
import Parent from "./Pages/Parent";
import React, { useState, createContext } from "react";
import Counter from "./Pages/Counter";
import Form from "./Pages/Form";

interface MyContextValue {
  count: number;
  setCount: (count: number) => void;
}

export const CounterContext = createContext<MyContextValue>({
  count: 0,
  setCount: (count: number) => {},
});
function App() {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };
  return (
    <CounterContext.Provider value={value}>
      <Box component="div" className="App">
        {/* <Parent></Parent>
        <Counter></Counter> */}
        <Form></Form>
      </Box>
    </CounterContext.Provider>
  );
}

export default App;
