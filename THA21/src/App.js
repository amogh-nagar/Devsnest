import Lists from './components/Lists';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [listsitem, setlistsitem] = useState([]);

  const additem = (item) => {
    const list = [...listsitem];
    list.unshift(item);
    setlistsitem(list);
  };
  const deletehandler = (id) => {
    let litems = [...listsitem];
    const updatedlist = litems.filter((i) => i.id !== id);
    // console.log(updatedlist);
    setlistsitem(updatedlist);
  };
  return (
    <div className='app'>
      <Form onAdd={additem} />
      {listsitem.length === 0 && <p className="noitems">No Items</p>}
      {listsitem.length > 0 && <Lists lists={listsitem} onDelete={deletehandler} />}
    </div>
  );
}

export default App;
