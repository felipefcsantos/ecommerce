import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackBarProps } from '../../interfaces/SnackBarProps';

const SnackBar = ({open, setOpen, type, msg}: SnackBarProps) => {

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBar