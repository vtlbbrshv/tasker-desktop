import { actions } from "../actions/const";

interface IApp {
  message: string;
}

const initState: IApp = {
  message: "",
};

const app = (state = initState, action = { type: "" }) => {
  switch (action.type) {
    case actions.ACTION: {
      return { ...state, message: "ready!" };
    }

    default:
      return state;
  }
};

export default app;
