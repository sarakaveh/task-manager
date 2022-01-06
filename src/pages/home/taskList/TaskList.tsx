import { useSelector } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { Task } from '../Home.types';
import { TaskItem } from '../taskItem/TaskItem';

export function TaskList(): JSX.Element {
  const taskList = useSelector((state: RootState) => state.taskList);

  return (
    <div className="container">
      {taskList.map((item: Task) => (
        <TaskItem key={item.id} />
      ))}
    </div>
  );
}
