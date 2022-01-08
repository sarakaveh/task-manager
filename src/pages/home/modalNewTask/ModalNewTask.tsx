import {
  Button,
  Dialog,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../../store/store';
import css from './ModalNewTask.module.scss';
import { closeModal } from '../../../store/modalNewTask';
import { Priorities, Task } from '../Home.types';
import { addTask, editTask } from '../../../store/taskList';

export function ModalNewTask(): JSX.Element {
  const dispatch = useDispatch();
  const dialogVisible = useSelector(
    (state: RootState) => state.modalNewTask.visible
  );
  const modalMode = useSelector((state: RootState) => state.modalNewTask.mode);
  const modalData = useSelector((state: RootState) => state.modalNewTask.data);
  const [priority, setPriority] = useState<Priorities>(modalData.priority);
  const [title, setTitle] = useState<string>(modalData.title);
  const [description, setDescription] = useState<string>(modalData.description);
  const [giftsKPI, setGiftsKPI] = useState<string>(modalData.giftsKPI);

  useEffect(() => {
    setTitle(modalData.title);
    setDescription(modalData.description);
    setGiftsKPI(modalData.giftsKPI);
    setPriority(modalData.priority);
  }, [modalData]);

  const onDialogClose = (): void => {
    dispatch(closeModal());
  };

  const updateTask = (task: Task) => {
    const newData: Task = {
      id: task.id,
      title: task.title,
      description: task.description,
      giftsKPI: task.giftsKPI,
      priority: task.priority,
    };
    dispatch(editTask({ id: task.id, data: newData }));
  };

  const onSubmit = (): void => {
    const value: Task = {
      title,
      description,
      giftsKPI,
      priority,
    };

    if (modalMode === 'edit') {
      updateTask({ id: modalData.id, ...value });
    } else if (modalMode === 'new') {
      dispatch(addTask({ ...value, done: false }));
    }
    onDialogClose();
  };

  return (
    <Dialog open={dialogVisible} onClose={onDialogClose}>
      <div className={css.container}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="dense"
          size="small"
          label="Task Title"
          variant="outlined"
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows="4"
          margin="dense"
          size="small"
          label="Task Description"
          variant="outlined"
        />
        <TextField
          value={giftsKPI}
          onChange={(e) => setGiftsKPI(e.target.value)}
          fullWidth
          margin="dense"
          size="small"
          label="Gifts and KPI"
          variant="outlined"
        />

        <RadioGroup
          row
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priorities)}
        >
          <FormControlLabel value="low" control={<Radio />} label="low" />
          <FormControlLabel value="medium" control={<Radio />} label="medium" />
          <FormControlLabel value="high" control={<Radio />} label="high" />
        </RadioGroup>
        <Button onClick={onSubmit} variant="contained">
          {modalMode === 'new' ? 'add to tasks' : 'update task'}
        </Button>
      </div>
    </Dialog>
  );
}
