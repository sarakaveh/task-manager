import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { Task } from '../Home.types';
import { TaskItem } from '../taskItem/TaskItem';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { openModal } from '../../../store/modalNewTask';
import css from './TaskList.module.scss';

export function TaskList(): JSX.Element {
  const dispatch = useDispatch();
  const taskList = useSelector((state: RootState) => state.taskList);
  console.log('taskList:', taskList);

  const onFabClick = (): void => {
    dispatch(openModal({ mode: 'new' }));
  };

  const onClick = (): void => {
    // dispatch(openModal({ mode: 'new' }));
  };

  return (
    <div className="container">
      <div className={css.blueBtn}>
        <Button onClick={onClick} variant="contained">
          View Done Tasks
        </Button>
      </div>
      {taskList.map((item: Task) => (
        <TaskItem
          id={item.id}
          title={item.title}
          description={item.description}
          giftsKPI={item.giftsKPI}
          priority={item.priority}
          key={item.id}
        />
      ))}

      <Fab onClick={onFabClick} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
