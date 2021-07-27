import ReactDOM from "react-dom";
import slice from "./store/index";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
ReactDOM.render(
  <Provider store={slice}>
    <App />
  </Provider>,
  document.getElementById("root")
);
