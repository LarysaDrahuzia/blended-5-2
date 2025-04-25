import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './TodoForm.module.css';
import { nanoid } from 'nanoid';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleInput = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!text.trim()) {
      return alert('can not be empty');
    }
    onSubmit({ id: nanoid(), text });

    setText('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        value={text}
        type="text"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
