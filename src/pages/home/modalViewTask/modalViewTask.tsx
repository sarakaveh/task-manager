import { Button, Dialog } from '@material-ui/core';
import css from './modalViewTask.module.scss';

export function ModalViewTask(): JSX.Element {
  return (
    <Dialog open={true}>
      <div className={css.container}>
        <Button variant="contained">add to tasks</Button>
      </div>
    </Dialog>
  );
}
