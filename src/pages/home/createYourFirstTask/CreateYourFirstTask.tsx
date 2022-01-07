import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/modal';

export function CreateYourFirstTask(): JSX.Element {
  const dispatch = useDispatch();

  const onClick = (): void => {
    dispatch(openModal({ mode: 'new' }));
  };

  return (
    <Button onClick={onClick} variant="contained">
      create your first task
    </Button>
  );
}
