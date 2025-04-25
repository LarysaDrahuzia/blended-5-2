import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useRef } from 'react';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (!newText) {
      alert('Todo text cannot be empty');
      return;
    }
    updateTodo(newText);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        ref={inputRef}
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
