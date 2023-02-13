import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ContainerColumnBox } from './custom';
import { Typography } from '@mui/material';
import { DefaultCopyField } from '@eisberg-labs/mui-copy-field';

const Transition = React.forwardRef(function Transition(
  props,
  ref,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function KeyPairPopUp({ open, setOpen, keyPair }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle color="primary">Public and Private Keys</DialogTitle>
        <DialogContent>
          <DialogContentText variant='body2' id="alert-dialog-slide-description">
            Please Copy and Store Private key anywhere safe. It will be needed for decrypting patient reports
          </DialogContentText>
          <ContainerColumnBox gap="2rem" mt="2rem">
            <DefaultCopyField sx={{
              width: "100%",
              border: "none"
            }} label={"Public Key"} value={keyPair?.publicKey} />
            <DefaultCopyField sx={{
              width: "100%",
              border: "none"
            }} label={"Private Key"} value={keyPair?.privateKey} />
          </ContainerColumnBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}