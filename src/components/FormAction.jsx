import { Link } from "react-router-dom"

const FormAction = () => {
    return (
        <>
            <button type="submit">Simpan</button>
            <Link to="/"><p>Kembali ke beranda</p></Link>
        </>
    )
}
export default FormAction