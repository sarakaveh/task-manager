import { Button, Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { closeViewModal } from '../../../store/modalViewTask';
import { removeTask } from '../../../store/taskList';
import css from './modalViewTask.module.scss';

export function ModalViewTask(): JSX.Element {
  const dispatch = useDispatch();
  const dialogVisible = useSelector(
    (state: RootState) => state.modalViewTask.visible
  );
  const dialogData = useSelector(
    (state: RootState) => state.modalViewTask.data
  );

  const onTaskDelete = () => {
    dispatch(removeTask(dialogData.id));
    dispatch(closeViewModal());
  };

  const onModalClose = (): void => {
    dispatch(closeViewModal());
  };

  return (
    <Dialog open={dialogVisible} onClose={onModalClose}>
      <div className={css.container}>
        <Button variant="contained">edit</Button>
        <Button variant="contained">done task</Button>
        <Button onClick={onTaskDelete} variant="contained">
          delete task
        </Button>
        {JSON.stringify(dialogData)}
      </div>
    </Dialog>
  );
}
