import { useNavigate, useParams } from "react-router-dom"
import FormInputUser from "../components/FormInputUser"
import { updateUser } from "../utils/user-api"


const EditUserPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const editUser = async ({ name, gender, address, born_date }) => {
        const response = await updateUser({ id, name, gender, address, born_date })
        if (response.message === "success") {
            alert("sukses")
            navigate("/")
        } else {
            console.log(response.detail)
            alert(response.detail)
        }
    }

    return (
        <div className="page-edit-user">
            <FormInputUser submitForm={editUser} />
        </div>
    )


}
export default EditUserPage