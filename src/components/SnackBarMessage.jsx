/* eslint-disable react/prop-types */
import { Alert, Snackbar } from "@mui/material"

const SnackBarMessage = ({ handleClose, open, severity, message }) => {
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>

            </Snackbar>
        </>
    )
}

export default SnackBarMessage