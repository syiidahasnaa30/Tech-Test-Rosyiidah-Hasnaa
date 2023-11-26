import { useNavigate } from "react-router-dom"
import FormInputUser from "../components/FormInputUser"
import { addUser } from "../utils/user-api";
import LoadingElement from "../components/LoadingElement";
import { useState } from "react";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const addNewUser = async ({ name, address, gender, born_date }) => {
        const { message } = await addUser({ name, address, gender, born_date })
        if (message) {
            alert("success")
            setLoading(false)
            navigate("/")
        } else {
            alert("failed")
        }
        setLoading(false)
    }

    if (loading) {
        return <LoadingElement />
    } else {
        return (
            <div className="page-input-user">
                <FormInputUser submitForm={addNewUser} setLoading={setLoading} />
            </div>
        )
    }

}
export default CreateUserPage