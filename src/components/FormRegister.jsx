/* eslint-disable react/prop-types */
import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"
import { validateInputRegister } from "../utils/validate-input"
import useSnackBar from "../hooks/useSnackBar"
import SnackBarMessage from "./SnackBarMessage"

const FormRegister = ({ submitForm, setLoading }) => {
    const [name, onNameChange] = useInput("")
    const [email, onEmailChange] = useInput("")
    const [password, onPasswordChange] = useInput("")
    const [open, messgeSnackBar, severity, setSnackBar, onOpenChange] = useSnackBar()
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const valid = validateInputRegister({ name, password })
        if (valid) {
            setSnackBar({ message: valid, severity: "warning" })
            setLoading(false)
        } else {
            submitForm({ name, email, password })
        }
    }
    return (
        <>
            <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
            <form className="form-register" onSubmit={handleSubmit}>
                <TextField value={name} onChange={onNameChange} label="Nama" fullWidth={true} margin="normal" />
                <TextField value={email} onChange={onEmailChange} type="email" label="Email" fullWidth={true} margin="normal" />
                <TextField value={password} onChange={onPasswordChange} type="password" label="Password" fullWidth={true} margin="normal" />
                <button type="submit">DAFTAR</button>
            </form>
        </>

    )

}
export default FormRegister