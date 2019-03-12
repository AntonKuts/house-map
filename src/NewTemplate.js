import  React, { useState } from 'react';
import './App.css';
import { Button, Input } from 'react-materialize'

function AddNewTask({ templates, setTemplate }) {
  const [value, setValue] = useState(1);
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    setTemplate( templates[value-1].template);

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input displayNone"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Write a new task"
        maxLength="20"
      />
      <Input s={12} type='select' label="Вибирете шаблон" onChange={e => setValue(e.target.value)}>
        {templates.map((template) => (
          <option key={template.id} index={template.id} value={template.id}>Шаблон № {template.id}</option>
        ))}
      </Input>
      <Button>Enter</Button>
    </form>
  );
}

export default AddNewTask;

// const newList = [...list, {
//   [z : properties[i][z]
//  }];
// setList(newList);

  // let z = template[y].field;
