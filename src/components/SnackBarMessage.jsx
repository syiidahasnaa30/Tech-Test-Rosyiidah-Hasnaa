import { Alert, Snackbar } from "@mui/material"
import useOpen from "../hooks/useOpen"

const SnackBarMessage = ({ message }) => {
    // const [snackBarState, onChangeSnackBarState] = useOpen(true)
    console.log(message)
    alert(message)
    return (
        <>
            {/* <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={true}
                message="I love snacks"
                key={"top" + "center"}>
                <Alert severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>

            </Snackbar> */}
        </>
    )
}

export default SnackBarMessage