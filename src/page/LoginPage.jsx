/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import FormLogin from "../components/FormLogin"
import { login, putToken } from "../utils/authentication-api"
import image from "../assets/image-welcome.png"
import CardDefaultUser from "../components/CardDefaultUser"
import { useState } from "react"
import LoadingElement from "../components/LoadingElement"

const LoginPage = ({ setToken }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const handleSubmit = async ({ email, password }) => {
        const { error, data, message } = await login({ email, password })
        if (error) {
            alert(message)
        } else {
            console.log(data)
            putToken(data)
            alert("sukses")
            setToken(data)
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <LoadingElement />
        )
    } else {
        return (
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
        )
    }

}
export default LoginPage