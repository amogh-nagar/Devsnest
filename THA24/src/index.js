import ReactDOM from "react-dom";
import Authctxprovider from "./context/authcontextProvider";
import {BrowserRouter} from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Authctxprovider>
    <BrowserRouter>
      <App />
     </BrowserRouter>
   </Authctxprovider>,

  document.getElementById("root")
);
