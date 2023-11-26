/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { MdClose } from "react-icons/md";
import DetailContent from './DetailContent';


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