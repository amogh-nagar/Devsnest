import styles from "./Login.module.css";
import {useRouteMatch} from "react-router";
import {useReducer,useContext} from "react";
import authctx from "../context/auth-context";
const reducer = (state, action) => {
  if (action.type === "EMAIL_CHANGE") {
    return {
      email: action.value,
      password: state.password,
    };
  }
  if (action.type === "PASSWORD_CHANGE") {
    return {
      email: state.email,
      password: action.value,
    };
  }
  return {
    email: "",
    password: "",
  };
};
const Login = () => {
  
    const ctx=useContext(authctx)
  
    const [form, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });
  const submithandler = (e) => {
    e.preventDefault();
    if (form.email.trim().length < 5 || !form.email.includes("@")) {
      console.log("email invalid");
      return;
    }
    if (form.password.trim().length < 5) {
      console.log("password invalid");
      return;
    }
    
    ctx.setisloggedin()
  };
  const route = useRouteMatch();
  console.log(route);

  const emailchangehandler = (e) => {
    dispatch({type: "EMAIL_CHANGE", value: e.target.value});
  };
  const passwordchangehandler = (e) => {
    dispatch({type: "PASSWORD_CHANGE", value: e.target.value});
  };

  return (
    <div class="main">
      <form action="" className={styles["form"]} onSubmit={submithandler}>
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          onChange={emailchangehandler}
          type="text"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={form.password}
          onChange={passwordchangehandler}
          type="text"
          id="password"
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
