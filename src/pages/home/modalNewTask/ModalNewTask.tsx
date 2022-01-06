import {
  Button,
  Dialog,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import css from './ModalNewTask.module.scss';
import { closeModal } from '../../../store/modal';

export function ModalNewTask(): JSX.Element {
  const dialogVisible = useSelector((state: RootState) => state.modal.visible);
  const dispatch = useDispatch();

  const onDialogClose = (): void => {
    dispatch(closeModal());
    console.log('close');
  };

  const onPriorityChange = (): void => {
    console.log('onPriorityChange');
  };

  return (
    <Dialog open={dialogVisible} onClose={onDialogClose}>
      <div className={css.container}>
        <TextField label="Task Title" variant="outlined" />
        <TextField label="Task Description" variant="outlined" />
        <TextField label="Gifts and KPI" variant="outlined" />

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value="low"
          onChange={onPriorityChange}
        >
          <FormControlLabel value="low" control={<Radio />} label="low" />
          <FormControlLabel value="medium" control={<Radio />} label="medium" />
          <FormControlLabel value="high" control={<Radio />} label="high" />
        </RadioGroup>
        <Button variant="contained">add to tasks</Button>
      </div>
    </Dialog>
  );
}
