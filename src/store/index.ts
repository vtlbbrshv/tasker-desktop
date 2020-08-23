import { createStore } from "redux";
import { rootReducer } from "../effects/reducers";

const storeFactory = () => ({
  ...createStore(rootReducer),
});

export default storeFactory;
