import { data } from '../../mock';
import css from './Home.module.scss';
import { TaskList } from './taskList/taskList';

export function Home(): JSX.Element {
  const taskListData = data;
  const addNewTask = <button>Create Your First Task :)</button>;

  return (
    <div className={css.container}>
      {taskListData.length ? <TaskList /> : addNewTask}
    </div>
  );
}
