import Text from '../components/Text/Text';
import TodoForm from '../components/TodoForm/TodoForm';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos !== null) {
      return JSON.parse(savedTodos);
    }
    return [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const fintTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  const addNewTodo = newTodo => {
    setTodos(prevTodo => {
      return [...prevTodo, { ...newTodo, id: nanoid() }];
    });
  };

  const deleteTodo = todoId => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = text => {
    if (fintTodo(text)) {
      alert('This todo already exists');
      return;
    }
    setTodos(prev =>
      prev.map(todo => (todo.id === currentTodo.id ? { ...todo, text } : todo))
    );
    cancelUpdate();
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <TodoForm onSubmit={addNewTodo} />
      )}

      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={handleEditTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
