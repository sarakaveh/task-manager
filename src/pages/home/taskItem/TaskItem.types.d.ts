import { Task } from '../Home.types.d';

export interface TaskItemProps extends Task {
  editable: boolean;
}
