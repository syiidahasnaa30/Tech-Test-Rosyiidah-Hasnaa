import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"

const FormLogin = ({ submitForm }) => {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("")

    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm({ email, password })
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <TextField
                type="email"
                value={email}
                onChange={onEmailChange}
                label="Email"
                fullWidth={true}
                required
                margin="normal" />
            <TextField
                value={password}
                onChange={onPasswordChange}
                label="Password"
                type="password"
                fullWidth={true}
                required
                margin="normal" />
            <button type="submit">LOGIN</button>
        </form>
    )
}
export default FormLogin