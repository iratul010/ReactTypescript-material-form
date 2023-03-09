interface PcAction {
  type: "INCREASE" | "DECREASE";
  payload: number;
}
//reducer
interface InitialState {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  education: string;
  quantity: number;
  feedBack: string;
  term: boolean;
}
interface Action {
  type: string;
  payload: {
    name: string;
    value: string;
  };
}
export function pcReducer(state: number, action: PcAction): number {
  if (action.type === "INCREASE") {
    return state + 1;
  }
  if (action.type === "DECREASE") {
    return state - 1;
  }
  return state;
}
//1st stage of pc

export const initialState: InitialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedBack: "",
  term: true,
};

export function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "TOGGLE":
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
}
