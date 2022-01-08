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

  const setStyle = () => {
    const style = {};
    if (task.priority === 'low') {
      Object.assign(style, {
        backgroundColor: 'green',
      });
      return style;
    }
    if (task.priority === 'medium') {
      Object.assign(style, {
        backgroundColor: 'yellow',
      });
      return style;
    }
    if (task.priority === 'high') {
      Object.assign(style, {
        backgroundColor: 'red',
      });
      return style;
    }
  };

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
        <div className={css.row1}>
          <div className={css.priority}>
            <div className={css.priorityShape} style={setStyle()} />
            <div className={css.priorityText}>{task.priority}</div>
          </div>
          <div className={css.title}>{task.title}</div>
        </div>
        <div className={css.row2}>{task.description}</div>
        <div className={css.row3}>
          <Button
            style={{
              backgroundColor: '#c0871c',
              minWidth: 120,
              height: 20,
              border: '1px solid black',
            }}
            onClick={onTaskEdit}
            size="small"
            variant="contained"
          >
            Edit Task
          </Button>
          <Button
            style={{
              backgroundColor: '#52ce52',
              minWidth: 120,
              height: 20,
              border: '1px solid black',
            }}
            onClick={onTaskDone}
            size="small"
            variant="contained"
          >
            Done Task
          </Button>
          <Button
            style={{
              backgroundColor: 'red',
              minWidth: 120,
              height: 20,
              border: '1px solid black',
            }}
            onClick={onTaskDelete}
            size="small"
            variant="contained"
          >
            Delete Task
          </Button>
        </div>
        {/*  <Button onClick={onTaskEdit} variant="contained">
          edit
        </Button> */}
        {/* <Button onClick={onTaskDone} variant="contained">
          done task
        </Button>
        <Button onClick={onTaskDelete} variant="contained">
          delete task
        </Button>
        {JSON.stringify(task)} */}
      </div>
    </Dialog>
  );
}
