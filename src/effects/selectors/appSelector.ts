import { RootState } from "../reducers";

export const getMessage = (state: RootState) => state.app.message;
