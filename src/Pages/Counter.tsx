import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useReducer } from "react";
interface UseReducer {
  (state: number, action: ActionType): number;
}
interface ActionType {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}
const Counter = () => {
  const initialState: number = 0;
  const reducer = (state: number, action: ActionType): number => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
    return state;
  };
  const [state, dispatch] = useReducer<UseReducer>(reducer, initialState);
  return (
    <Box component="div">
      <Typography variant="h2" color="green">
        Redux Counter
      </Typography>

      <Box
        component="div"
        sx={{ border: "2px solid green", width: "400px", height: "150px", margin: "0px auto", padding: "50px" }}
      >
        <Typography>{state}</Typography>
        <Button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} variant="outlined" sx={{ margin: "20px" }}>
          +
        </Button>
        <Button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })} variant="outlined">
          -
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
