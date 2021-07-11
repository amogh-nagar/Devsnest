import Row from "./Row";


const Box = () => {
  let arr = [];
  let x = 1;
  for (let i = 0; i < 8; i++) {
    arr.push({ isblack: x });
    x =x*-1;
  }

  return (
    <div className='box'>
      {arr.map((a) => (
        <Row isblack={a.isblack} />
      ))}
    </div>
  );
};

export default Box;
