import Grid from '../Grid/Grid';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <TodoListItem
          key={id}
          id={id}
          text={text}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Grid>
  );
};

export default TodoList;
