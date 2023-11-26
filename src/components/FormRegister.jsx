import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"

const FormRegister = ({ submitForm }) => {
    const [name, onNameChange] = useInput("")
    const [email, onEmailChange] = useInput("")
    const [password, onPasswordChange] = useInput("")

    const validateInputRegister = ({ name, password }) => {
        if (name.length < 8) {
            return "Pastikan nama anda minimal 8 karakter"
        } else if (password.length < 8) {
            return "Pastikan password minimal 8 karakter"
        }
        return
    }
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
        <form onSubmit={handleSubmit}>
            <TextField value={name} onChange={onNameChange} label="Nama" fullWidth={true} margin="normal" />
            <TextField value={email} onChange={onEmailChange} type="email" label="Email" fullWidth={true} margin="normal" />
            <TextField value={password} onChange={onPasswordChange} type="password" label="Password" fullWidth={true} margin="normal" />
            <button type="submit">DAFTAR</button>
        </form>
    )

}
export default FormRegister