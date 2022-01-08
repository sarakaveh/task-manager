import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/modalNewTask';
import { openViewModal } from '../../../store/modalViewTask';
import { doneTask } from '../../../store/taskList';
import css from './TaskItem.module.scss';
import { TaskItemProps } from './TaskItem.types';

export function TaskItem(prop: TaskItemProps): JSX.Element {
  const dispatch = useDispatch();

  const onEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(openModal({ mode: 'edit', data: prop }));
  };

  const onDoneClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(doneTask(prop.id));
  };

  const onTaskBoxClick = (): void => {
    dispatch(openViewModal({ data: prop }));
  };

  const setStyle = () => {
    const style = {};
    if (prop.priority === 'low') {
      Object.assign(style, {
        backgroundColor: 'green',
      });
      return style;
    }
    if (prop.priority === 'medium') {
      Object.assign(style, {
        backgroundColor: 'yellow',
      });
      return style;
    }
    if (prop.priority === 'high') {
      Object.assign(style, {
        backgroundColor: 'red',
      });
      return style;
    }
  };

  const doneButtonVisibilityTSX = !prop.done ? (
    <Button 
    style={{ backgroundColor: '#c0871c', minWidth: 120 ,  height: 20 , border: '1px solid black' }}
    onClick={onDoneClick} variant="contained">
      Done Task
    </Button>
  ) : (
    false
  );

  const editButtonVisibilityTSX = prop.editable ? (
    <Button
      style={{ backgroundColor: '#52ce52', minWidth: 120 ,  height: 20 , border: '1px solid black' }}
      onClick={onEdit}
      size='small'
    
      variant="contained"
    >
      Edit Task
    </Button>
  ) : (
    false
  );

  return (
    <div onClick={onTaskBoxClick} className={css.container}>
      <div className={css.item}>
        <div className={css.taskTitle}>{prop.title}</div>
        <div className={css.taskPriority}>
          <div className={css.priorityText}>{prop.priority}</div>
          <div className={css.priorityShape} style={setStyle()} />
        </div>
        <div className={css.description}>{prop.description}</div>
        <div className={css.taskBtn}>
          {doneButtonVisibilityTSX}
          {editButtonVisibilityTSX}
        </div>
      </div>
    </div>
  );
}
