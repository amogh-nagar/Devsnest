import Square from "./Square";

const Row = ({isblack}) => {
  let arr = [];

  let x = isblack;
  for (let i = 0; i < 8; i++) {
    arr.push({ color: x });
    x = x * -1;
  }

  return (
    <div className="row">
      {arr.map((a) => (
        <Square color={a.color} />
      ))}
    </div>
  );
};

export default Row;
