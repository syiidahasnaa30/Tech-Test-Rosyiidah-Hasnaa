/* eslint-disable react/prop-types */
import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"
import { validateInputRegister } from "../utils/validate-input"

const FormRegister = ({ submitForm }) => {
    const [name, onNameChange] = useInput("")
    const [email, onEmailChange] = useInput("")
    const [password, onPasswordChange] = useInput("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const valid = validateInputRegister({ name, password })
        if (valid) {
            alert(valid)
        } else {
            submitForm({ name, email, password })
        }
    }
    return (
        <form className="form-register" onSubmit={handleSubmit}>
            <TextField value={name} onChange={onNameChange} label="Nama" fullWidth={true} margin="normal" />
            <TextField value={email} onChange={onEmailChange} type="email" label="Email" fullWidth={true} margin="normal" />
            <TextField value={password} onChange={onPasswordChange} type="password" label="Password" fullWidth={true} margin="normal" />
            <button type="submit">DAFTAR</button>
        </form>
    )

}
export default FormRegister