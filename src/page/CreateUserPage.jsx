import { useNavigate } from "react-router-dom"
import FormInputUser from "../components/FormInputUser"
import { addUser } from "../utils/user-api";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const addNewUser = async ({ name, address, gender, born_date }) => {
        const { message } = await addUser({ name, address, gender, born_date })
        if (message) {
            alert("success")
            navigate("/")
        } else {
            alert("failed")
        }
    }
    return (
        <div className="page-input-user">
            <FormInputUser addNewUser={addNewUser} />
        </div>
    )
}
export default CreateUserPage