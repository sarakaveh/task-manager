import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/modalNewTask';
import css from './TaskItem.module.scss';
import { TaskItemProps } from './TaskItem.types';

export function TaskItem(prop: TaskItemProps): JSX.Element {
  const dispatch = useDispatch();

  const onEdit = (): void => {
    console.log('edit');
    dispatch(openModal({ mode: 'edit', data: prop }));
  };

  const setStyle = () => {
      const style = {};
      if (prop.priority === 'low') {
          Object.assign(style ,{
              backgroundColor: 'green',
          });
          return style
      }
      if (prop.priority === 'medium') {
          Object.assign(style ,{
              backgroundColor: 'yellow',
          });
          return style
      }
      if (prop.priority === 'high') {
          Object.assign(style ,{
              backgroundColor: 'red',
          });
          return style
      }
  }

  return (
    <div className={css.container}>
        <div className={css.item}>
            <div className={css.taskTitle}>{prop.title}</div>
            <div className={css.taskPriority}>
                <div className={css.priorityText}>{prop.priority}</div>
                <div className={css.priorityShape} style={setStyle()}/>
            </div>
            <div className={css.description}>{prop.description}</div>
            <div className={css.taskBtn}>
                <Button onClick={onEdit} variant="contained">
                    Done Task
                </Button>
                <Button onClick={onEdit} variant="contained">
                    Edit Task
                </Button>
            </div>
        </div>

      {/*<div>*/}
      {/*  title:*/}
      {/*  {prop.title}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  description:*/}
      {/*  {prop.description}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  giftsKPI:*/}
      {/*  {prop.giftsKPI}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  priority:*/}
      {/*  {prop.priority}*/}
      {/*</div>*/}
    </div>
  );
}
