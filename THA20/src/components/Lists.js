import React from 'react';
import SingleList from './SingleList';
import { useState } from 'react';
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

  const [listitems, setlistitems] = useState(arr);

  const deletehandler = (name) => {
    let litems = [...listitems];
    const updatedlist = litems.filter((i) => i.dishes !== name);
    setlistitems(updatedlist);
  };

  return (
    <div className='list-content'>
      <h1 className='h1'>Calories</h1>

      {listitems.length === 0 && <p class='no-items'>No Items Found</p>}
      {listitems.length > 0 && (
        <div className='lists'>
          {listitems.map((a) => (
            <SingleList
              dishes={a.dishes}
              calories={a.calories}
              onDeletee={deletehandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lists;
