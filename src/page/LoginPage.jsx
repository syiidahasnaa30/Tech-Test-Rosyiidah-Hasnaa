/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import FormLogin from "../components/FormLogin"
import { login, putToken } from "../utils/authentication-api"
import image from "../assets/image-welcome.png"
import CardDefaultUser from "../components/CardDefaultUser"
import { useState } from "react"
import LoadingElement from "../components/LoadingElement"
import SnackBarMessage from "../components/SnackBarMessage"
import useSnackBar from "../hooks/useSnackBar"

const LoginPage = ({ setToken }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [open, messgeSnackBar, severity, setSnackBar, onOpenChange] = useSnackBar()

    const handleSubmit = async ({ email, password }) => {
        const { error, data, message } = await login({ email, password })
        if (error) {
            alert(error)
            setSnackBar({ message, severity: "error" })
        } else {
            putToken(data)
            setSnackBar({ message: "sukses", severity: "success" })
            setToken(data)
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
                <div className="login-page">
                    <div className="login-page__left">
                        <h2>Jangan lupa Login Dulu</h2>
                        <FormLogin submitForm={handleSubmit} setLoading={setLoading} />
                        <CardDefaultUser />
                    </div>
                    <div className="login-page__right">
                        <img src={image} width={"100%"} />
                        <p>Belum punya akun?</p>
                        <button onClick={() => { navigate("/register") }}>Buat Akun</button>
                    </div>
                </div>
            </>

        )
    }

}
export default LoginPage