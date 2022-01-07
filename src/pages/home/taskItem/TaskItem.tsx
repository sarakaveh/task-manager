import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/modal';
import css from './TaskItem.module.scss';
import { TaskItemProps } from './TaskItem.types';

export function TaskItem(prop: TaskItemProps): JSX.Element {
  const dispatch = useDispatch();

  const onEdit = (): void => {
    console.log('edit');
    dispatch(openModal({ mode: 'edit', data: prop }));
  };

  return (
    <div className={css.container}>
      <div>
        title:
        {prop.title}
      </div>
      <div>
        description:
        {prop.description}
      </div>
      <div>
        giftsKPI:
        {prop.giftsKPI}
      </div>
      <div>
        priority:
        {prop.priority}
      </div>

      <Button onClick={onEdit} variant="contained">
        edit
      </Button>
    </div>
  );
}
