import { Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { closeDoneModal } from '../../../store/modalDoneTask';
import { TaskItem } from '../taskItem/TaskItem';
import { Task } from '../Home.types';
import css from './modalDoneTask.module.scss';

export function ModalDoneTask(): JSX.Element {
  const dispatch = useDispatch();
  const dialogVisible = useSelector(
    (state: RootState) => state.modalDoneTask.visible
  );
  const doneTaskList = useSelector((state: RootState) => state.taskList).filter(
    (task: Task) => task.done
  );

  const onModalClose = (): void => {
    dispatch(closeDoneModal());
  };

  const doneTaskListJSX = doneTaskList.map((task: Task) => (
    <TaskItem key={task.id} editable={false} {...task} />
  ));

  return (
    <Dialog open={dialogVisible} onClose={onModalClose}>
      <div className={css.container}>
        {!doneTaskList.length && (
          <div className={css.empty}>there is nothing task</div>
        )}
        {doneTaskListJSX}
      </div>
    </Dialog>
  );
}
