const Listitem = (props) => {
  return (
    <div className='list-item'>
      <h2>{props.dishes}</h2>
      <button
        onClick={props.onDeletee.bind(null, props.id)}
        className='delete'
        type='button'
      >
        Delete
      </button>
      <p>You have consumed {props.calorie} calories today</p>
    </div>
  );
};

export default Listitem;
