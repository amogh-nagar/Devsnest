import React, { useRef } from "react";

const NewTodo = () => {
  const todotextinputref = useRef<HTMLInputElement>(null);

  //onCLick = React.MouseEvent
  //onSubmit = React.FormEvent
  const submithandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredtext=todotextinputref.current?.value;
  };

  return (
    <form onSubmit={submithandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todotextinputref} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
