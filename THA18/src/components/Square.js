const Square = ({ color }) => {
  return <div className={`square  ${color===1 ? 'black' : 'white'}`}></div>;
};

export default Square;
