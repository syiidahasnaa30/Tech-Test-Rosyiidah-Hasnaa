/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdClose } from "react-icons/md";
import DetailContent from './DetailContent';
import { Avatar } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const DetailDialog = ({ open, handleClose, id }) => {
    return (
        <React.Fragment >
            <Dialog
                onClose={handleClose}
                open={open}
                fullWidth={true}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <MdClose />
                </IconButton>
                <DialogContent dividers>
                    <DetailContent id={id} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
export default DetailDialog