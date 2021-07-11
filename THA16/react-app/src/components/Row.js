import React from 'react';
import Squares from './Squares';
const Row = () => {
  let arr = [];

  for (let i = 0; i < 8; i++) {
    arr.push(<Squares />);
  }

  return <div class='row'>{arr}</div>;
};

export default Row;
