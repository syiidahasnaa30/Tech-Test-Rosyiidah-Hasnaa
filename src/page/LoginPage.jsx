import { useNavigate } from "react-router-dom"
import FormLogin from "../components/FormLogin"
import { login, putToken } from "../utils/authentication-api"

const LoginPage = ({ setToken }) => {
    const navigate = useNavigate()
    const handleSubmit = async ({ email, password }) => {
        const { error, data, message } = await login({ email, password })
        if (error) {
            console.log(message)
            alert("Pastikan password dan email anda telah sesuai")
        } else {
            console.log(data)
            putToken(data)
            alert("sukses")
            setToken(data)
        }
    }

    return (
        <div className="login-page">
            <div className="login-page__left">
                <h1>Jangan lupa Login Dulu</h1>
                <FormLogin submitForm={handleSubmit} />
            </div>
            <div className="login-page__right">
                <h2>Kamu belum punya akun?</h2>
                <p>Mari buat akunmu dan buat pengalaman terbaikmu bersama website ini</p>
                <button onClick={() => { navigate("/register") }}>Buat Akun</button>
            </div>
        </div>
    )
}
export default LoginPage