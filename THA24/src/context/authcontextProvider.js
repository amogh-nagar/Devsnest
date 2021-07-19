import authctx from "./auth-context";
import {useReducer} from "react";

const authreducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      isloggedin: !state.isloggedin,
    };
  }
  return {
      isloggedin:false
  }
};

const Authctxprovider = (props) => {
  const [authcontext, dispatch] = useReducer(authreducer, {
    isloggedin: false,
  });

  const setisloggedinhandler = () => {
    dispatch({type: "CHANGE"});
  };

  return (
    <authctx.Provider
      value={{
        isloggedin: authcontext.isloggedin,
        setisloggedin: setisloggedinhandler,
      }}
    >
      {props.children}
    </authctx.Provider>
  );
};



export default Authctxprovider;