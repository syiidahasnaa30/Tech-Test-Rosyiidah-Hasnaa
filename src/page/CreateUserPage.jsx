import { useNavigate } from "react-router-dom"
import FormInputUser from "../components/FormInputUser"
import { addUser } from "../utils/user-api";
import LoadingElement from "../components/LoadingElement";
import { useState } from "react";
import useSnackBar from "../hooks/useSnackBar";
import SnackBarMessage from "../components/SnackBarMessage";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [open, messgeSnackBar, severity, setSnackBar, onOpenChange] = useSnackBar()


    const addNewUser = async ({ name, address, gender, born_date }) => {
        const { message } = await addUser({ name, address, gender, born_date })
        if (message) {
            setSnackBar({ message, severity: "success" })
            setLoading(false)
            navigate("/")
        } else {
            setSnackBar({ message: "Gagal menambahkan data", severity: "error" })
        }
        setLoading(false)
    }

    if (loading) {
        return (<>
            <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
            <LoadingElement />
        </>)

    } else {
        return (
            <>
                <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
                <div className="page-input-user">
                    <FormInputUser submitForm={addNewUser} setLoading={setLoading} />
                </div>
            </>

        )
    }

}
export default CreateUserPage