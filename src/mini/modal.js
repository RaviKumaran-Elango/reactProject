import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
        <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ravi
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle >
          {"small payment "}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <input type='text' placeholder='sent money'></input>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
    
          <Button onClick={handleClose}>sent</Button>
          <Button onClick={handleClose}> receive</Button>
        </DialogActions>
      </Dialog>
      </div>

      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        isai
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle >
          {"small payment "}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <input type='text' placeholder='sent money'></input>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>sent</Button>
          <Button onClick={handleClose}> receive</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
