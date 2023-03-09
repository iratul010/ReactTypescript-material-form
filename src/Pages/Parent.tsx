import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { CounterContext } from "../App";
import Child from "./Child";
interface MyContextValue {
  count: number;
  setCount: (count: number) => void;
}
const Parent = () => {
  const { count, setCount } = useContext<MyContextValue>(CounterContext);

  return (
    <Box component="div">
      <Typography variant="h2" color="green">
        UseState Parent
      </Typography>

      <Box
        component="div"
        sx={{ border: "2px solid green", width: "400px", height: "100px", margin: "0px auto", padding: "50px" }}
      >
        <Typography>{count}</Typography>
        <Button onClick={() => setCount(count + 1)} variant="outlined" sx={{ margin: "20px" }}>
          +
        </Button>
        <Button variant="outlined" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </Box>
      <Child></Child>
    </Box>
  );
};

export default Parent;
