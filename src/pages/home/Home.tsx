import { ModalNewTask } from './modalNewTask/ModalNewTask';
import { TaskList } from './taskList/TaskList';
import { CreateYourFirstTask } from './createYourFirstTask/CreateYourFirstTask';
import css from './Home.module.scss';

export function Home(): JSX.Element {
  const taskListData = [];

  return (
    <>
      <div className={css.container}>
        {taskListData.length ? <TaskList /> : <CreateYourFirstTask />}
      </div>
      <ModalNewTask />
    </>
  );
}
