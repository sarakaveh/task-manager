import { data } from '../../../mock';
import { Task } from '../Home.types';
import { TaskItem } from '../taskItem/TaskItem';

export function TaskList(): JSX.Element {
  const taskListData: Task[] = data;

  return (
    <div className="container">
      {taskListData.map((item: Task) => (
        <TaskItem key={item.id} />
      ))}
    </div>
  );
}
