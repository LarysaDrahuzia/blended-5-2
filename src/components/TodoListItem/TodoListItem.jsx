import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import GridItem from '../GridItem/GridItem';
import Text from '../Text/Text';

const TodoListItem = ({ id, text, index, onDelete, onEdit }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {`TODO # ${index + 1}`}
        </Text>
        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => onDelete(id)}
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={() => onEdit({ id, text })}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default TodoListItem;
