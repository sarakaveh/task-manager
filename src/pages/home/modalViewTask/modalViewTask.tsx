import { Button, Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { closeViewModal } from '../../../store/modalViewTask';
import { doneTask, removeTask } from '../../../store/taskList';
import css from './modalViewTask.module.scss';
import { openModal } from '../../../store/modalNewTask';

export function ModalViewTask(): JSX.Element {
  const dispatch = useDispatch();
  const dialogVisible = useSelector(
    (state: RootState) => state.modalViewTask.visible
  );
  const task = useSelector((state: RootState) => state.modalViewTask.data);

  const onTaskDelete = () => {
    dispatch(removeTask(task.id));
    dispatch(closeViewModal());
  };

  const onTaskEdit = (): void => {
    dispatch(closeViewModal());
    dispatch(openModal({ mode: 'edit', data: task }));
  };

  const onTaskDone = (): void => {
    dispatch(doneTask(task.id));
    dispatch(closeViewModal());
  };

  const onModalClose = (): void => {
    dispatch(closeViewModal());
  };

  return (
    <Dialog open={dialogVisible} onClose={onModalClose}>
      <div className={css.container}>
        <Button onClick={onTaskEdit} variant="contained">
          edit
        </Button>
        <Button onClick={onTaskDone} variant="contained">
          done task
        </Button>
        <Button onClick={onTaskDelete} variant="contained">
          delete task
        </Button>
        {JSON.stringify(task)}
      </div>
    </Dialog>
  );
}
