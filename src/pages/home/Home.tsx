import { useSelector } from 'react-redux';
import { ModalNewTask } from './modalNewTask/ModalNewTask';
import { TaskList } from './taskList/TaskList';
import { CreateYourFirstTask } from './createYourFirstTask/CreateYourFirstTask';
import { RootState } from '../../store/configureStore';
import css from './Home.module.scss';

export function Home(): JSX.Element {
  const taskList = useSelector((state: RootState) => state.taskList);


  return (
    <>
      <div className={css.container}>
        {taskList.length ? <TaskList /> : <CreateYourFirstTask />}
      </div>
      <ModalNewTask/>
    </>
  );
}
