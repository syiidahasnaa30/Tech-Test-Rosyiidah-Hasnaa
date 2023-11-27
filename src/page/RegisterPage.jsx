import { useNavigate } from "react-router-dom"
import FormRegister from "../components/FormRegister"
import { register } from "../utils/authentication-api"
import image from "../assets/image-welcome.png"
import { useState } from "react"
import LoadingElement from "../components/LoadingElement"
import useSnackBar from "../hooks/useSnackBar"
import SnackBarMessage from "../components/SnackBarMessage"

const RegisterPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [open, messgeSnackBar, severity, setSnackBar, onOpenChange] = useSnackBar()
    const submitForm = async ({ name, email, password }) => {
        const { error, message } = await register({ name, email, password })
        if (error) {

            setSnackBar({ message, severity: "error" })
        } else {

            setSnackBar({ message, severity: "success" })
            setLoading(false)
            navigate("/")
        }
        setLoading(false)
    }
    if (loading) {
        return (
            <>
                <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
                <LoadingElement />
            </>

        )
    } else {
        return (
            <>
                <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
                <div className="register-page">
                    <div className="register-page__left">
                        <img src={image} alt="gambar" width={"100%"} />
                        <p>Sudah memiliki akun?</p>
                        <button onClick={() => navigate("/")}>LOGIN</button>
                    </div>
                    <div className="register-page__right">
                        <h2>Buat Akunmu</h2>
                        <FormRegister submitForm={submitForm} setLoading={setLoading} />
                    </div>

                </div>
            </>

        )
    }
}
export default RegisterPage