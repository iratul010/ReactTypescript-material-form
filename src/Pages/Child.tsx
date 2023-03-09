import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CounterContext } from "../App";

const Child = () => {
  const { count } = useContext(CounterContext);
  return (
    <Box component="div">
      <Typography variant="h2" color="green">
        UseState Child
      </Typography>

      <Box
        component="div"
        sx={{ border: "2px solid green", width: "400px", height: "100px", margin: "0px auto", padding: "50px" }}
      >
        <Typography>{count}</Typography>
        <Button variant="outlined" sx={{ margin: "20px" }}>
          +
        </Button>
        <Button variant="outlined">-</Button>
      </Box>
    </Box>
  );
};

export default Child;
