import {useSelector, useDispatch} from "react-redux";
import {inputslicactions} from "./store/input";

function App() {
  const dispatch = useDispatch();
  const {name, email} = useSelector((state) => state.input);

  const namechangehandler = (e) => {
    dispatch(inputslicactions.changename(e.target.value));
  };
  const emailchangehandler = (e) => {
    dispatch(inputslicactions.changeemail(e.target.value));
  };

  return (
    <div className="container">
      <div className="message">
       <h1>Powered By Redux</h1> 
      </div>
      <div className="input-div">
        <input value={name} onChange={namechangehandler} type="text" />
        <input value={email} onChange={emailchangehandler} type="text" />
      </div>
      <div className="field">
        <div className="name">
          <label htmlFor="">Name</label>
          <h2>{name}</h2>
        </div>

        <div className="email">
          <label htmlFor="">Email</label>

          <h2>{email}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
