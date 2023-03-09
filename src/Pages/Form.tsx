import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useReducer } from "react";
import { initialState, pcReducer, reducer } from "../State/FormReducer";

const Form = () => {
  const PCinitialState = 0;
  const [pcState, pcDispatch] = useReducer(pcReducer, PCinitialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (event: any) => {
    event.preventDefault();
    state.quantity = pcState;
    console.log(state);
  };
  return (
    <Box
      component="form"
      sx={{
        margin: "40px auto",
        width: "700px",
        height: "700px",
        boxSizing: "border-box",
        border: "1px solid blue",
        padding: "40px",
      }}
      onSubmit={submit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            id="firstName"
            type="text"
            label="First Name"
            name="firstName"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "INPUT", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="lastName"
            type="text"
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "INPUT", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="email"
            type="email"
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "INPUT", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadioGroup
            row
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "INPUT", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
            }
          >
            <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
            <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
            <FormControlLabel value="other" name="gender" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="educationLabel">Education Level</InputLabel>
            <Select
              label="Education Level"
              labelId="educationLabel"
              id="education"
              name="education"
              value={state.education}
              onChange={(e: SelectChangeEvent) =>
                dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })
              }
            >
              <MenuItem value="ssc">
                <em>SSC</em>
              </MenuItem>
              <MenuItem value="hsc">HSC</MenuItem>
              <MenuItem value="undergraduate">Under graduate</MenuItem>
              <MenuItem value="graduate">Graduate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <ButtonGroup variant="contained" aria-label="outlined success button group">
            <Button variant="outlined" onClick={() => pcDispatch({ type: "INCREASE", payload: 1 })}>
              +
            </Button>
            <Typography sx={{ width: "200px", margin: "5px auto" }}>{pcState}</Typography>
            <Button variant="outlined" onClick={() => pcDispatch({ type: "DECREASE", payload: 1 })}>
              -
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="feedBack"
            label="Message"
            multiline
            rows={4}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "INPUT", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
            }
          />
        </Grid>
        <Grid item xs={12} md={12} textAlign="start">
          <FormControlLabel
            control={
              <Checkbox
                value={state.term}
                id="term"
                color="primary"
                onClick={(e: any) =>
                  dispatch({ type: "TOGGLE", payload: { name: e.currentTarget.name, value: e.currentTarget.value } })
                }
              />
            }
            label="I agree to terms and conditions"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" disabled={state.term}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
