import React from 'react';

const SingleList = (props) => {
  return (
    <div class='list-item'>
      <h2>{props.dishes}</h2>
      <button onClick={props.onDeletee.bind(null, props.dishes)} type='button'>
        Delete
      </button>
      <p>You have consumed {props.calories} calories today</p>
    </div>
  );
};

export default SingleList;
