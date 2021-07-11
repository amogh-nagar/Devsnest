import { useRef } from 'react';

const Form = (props) => {
  const dishesref = useRef();
  const calorieref = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    let enteredishes = dishesref.current.value;
    let enteredcalorie = calorieref.current.value;

    if (enteredcalorie.length === 0 || enteredishes === 0) {
      alert('You have to enter both fields');
      return;
    }

    props.onAdd({
      id: Math.random() * 100,
      dishes: enteredishes,
      calorie: enteredcalorie,
    });
  };

  return (
    <div className='form'>
      <form onSubmit={submithandler} action=''>
        <label htmlFor='dishes'>Dishes</label>
        <input type='text' ref={dishesref} id='dishes' />
        <label htmlFor='calorie'>Calorie</label>
        <input type='text' id='calorie' ref={calorieref} />
        <button type='submit' className='btnsubmit'>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
