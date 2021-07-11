import Listitem from './Listitem';

const Lists = (props) => {
  return (
    <div className='list-content'>
      {props.lists.map((list) => (
        <Listitem
          key={list.id}
          onDeletee={props.onDelete}
          dishes={list.dishes}
          calorie={list.calorie}
          id={list.id}
        />
      ))}
    </div>
  );
};

export default Lists;
