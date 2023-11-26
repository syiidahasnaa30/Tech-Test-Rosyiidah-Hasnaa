import { useNavigate } from "react-router-dom"
import image from "../assets/not-found.png"
const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="page-not-found">
            <img src={image} alt="not found" />
            <p>Page Not Found</p>
            <button onClick={() => { navigate("/") }}>Kembali ke beranda</button>
        </div>
    )
}
export default NotFoundPage