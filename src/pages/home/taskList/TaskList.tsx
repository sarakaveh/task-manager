import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Task } from '../Home.types';
import { TaskItem } from '../taskItem/TaskItem';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { openModal } from '../../../store/modalNewTask';
import css from './TaskList.module.scss';
import { openDoneModal } from '../../../store/modalDoneTask';

export function TaskList(): JSX.Element {
  const dispatch = useDispatch();
  const taskList = useSelector((state: RootState) => state.taskList);

  const onFabClick = (): void => {
    dispatch(openModal({ mode: 'new' }));
  };

  const onViewDoneTaskClick = (): void => {
    dispatch(openDoneModal());
  };

  return (
    <div className="container">
      <div className={css.blueBtn}>
        <Button onClick={onViewDoneTaskClick} variant="contained">
          View Done Tasks
        </Button>
      </div>
      {taskList.map((task: Task) => (
        <TaskItem editable={true} key={task.id} {...task} />
      ))}

      <Fab onClick={onFabClick} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
