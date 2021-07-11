import {useState} from 'react'
const Button = () => {
  const [number, setnumber] = useState(0);

  const clickhandler = () => {
    setnumber((prevstate) => prevstate + 1);
  };

  return (
    <div className="button">
      <button  type="button" onClick={clickhandler}>{number}</button>
    </div>
  );
};

export default Button;
