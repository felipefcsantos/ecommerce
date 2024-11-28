export interface SnackBarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    type: 'success' | 'error';
    msg: string;
  }

  export interface PropsStateSnackbar {
    type: 'success' | 'error';
    msg: string;
  }