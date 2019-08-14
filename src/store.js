import { createStore } from "redux";
import reducers from "./reducers/todos"

const store = createStore(reducers);

export default store;
