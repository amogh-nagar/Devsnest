import React from 'react';
import SingleList from './SingleList';
const Lists = () => {
  let arr = [
    {
      dishes: 'Pizza',
      calories: '56',
    },
    {
      dishes: 'Burger',
      calories: '53',
    },
    {
      dishes: 'Cowk',
      calories: '67',
    },
    {
      dishes: 'Browne',
      calories: '76',
    },
    {
      dishes: 'Samosa',
      calories: '89',
    },
    {
      dishes: 'Dhokla',
      calories: '43',
    },
    {
      dishes: 'Paw-Bhaji',
      calories: '65',
    },
    {
      dishes: 'Idli-Sambar',
      calories: '90',
    },
  ];

  return (
    <div className="list-content">
      <h1 className="h1">Calories</h1>
      <div className="lists">
      {arr.map((a) => (
        <SingleList dishes={a.dishes} calories={a.calories} />
      ))}
      </div>
    </div>
  );
};

export default Lists;
