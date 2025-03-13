import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // e.target.reset();
    if (!query.trim()) {
      return alert('can not be empty');
    }
    onSubmit(query);

    setQuery('');
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
        value={query}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
