import authctx from "../context/auth-context";
import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

const Header = () => {
  const ctx = useContext(authctx);
  const history = useHistory();
  const handler = () => {
    history.push("/login");
  };

  let login = ctx.isloggedin ? "Logout" : "Login";
  return (
    <div class="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="linkactive" to="/home">
              {" "}
              Home
            </NavLink>
          </li>
          {ctx.isloggedin && (
            <li>
              <NavLink activeClassName="linkactive" to="/profile">
                {" "}
                Profile
              </NavLink>
            </li>
          )}
          {ctx.isloggedin && (
            <li>
              <NavLink activeClassName="linkactive" to="/dashboard">
                {" "}
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <div className="button">
        <button onClick={ctx.isloggedin ? ctx.setisloggedin : handler}>
          {/* <NavLink activeClassName="linkactive" to={loginpath}>
            {" "} */}
          {login}
          {/* </NavLink> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
