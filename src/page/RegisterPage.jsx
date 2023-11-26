import { useNavigate } from "react-router-dom"
import FormRegister from "../components/FormRegister"
import { register } from "../utils/authentication-api"
import image from "../assets/image-welcome.png"

const RegisterPage = () => {
    const navigate = useNavigate()
    const submitForm = async ({ name, email, password }) => {
        const { error, message } = await register({ name, email, password })
        if (error) {
            alert("gagal")
        } else {
            alert(message)
            navigate("/")
        }
    }
    return (
        <div className="register-page">
            <div className="register-page__left">
                <img src={image} alt="gambar" width={"100%"} />
                <p>Sudah memiliki akun?</p>
                <button onClick={() => navigate("/")}>LOGIN</button>
            </div>
            <div className="register-page__right">
                <h2>Buat Akunmu</h2>
                <FormRegister submitForm={submitForm} />
            </div>

        </div>
    )
}
export default RegisterPage