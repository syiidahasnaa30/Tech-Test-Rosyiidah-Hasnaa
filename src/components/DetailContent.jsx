import { Avatar } from "@mui/material"
import { useEffect, useState } from "react"
import { getUser } from "../utils/user-api";
import { showFormattedDate, showFormattedDateTime } from "../utils/fromat-date";
import { BiSolidCity } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";

const DetailContent = ({ id }) => {
    const [user, setUser] = useState({ name: "" });

    const getUserById = async () => {
        const response = await getUser(id)
        if (response.message === "success") {
            setUser(response.data)
        } else {
            alert(response.detail)
        }
    }

    useEffect(() => {
        getUserById()
    }, [])
    return (
        <div className="detail-content">
            <div className="detail-conten__header">
                <Avatar sx={{ bgcolor: "#43A49B", width: "56px", height: "56px" }}>{user.name.charAt(0).toUpperCase()}</Avatar>
            </div>
            <div className="detail-content__body">
                <h2>{user.name}</h2>
                <p><BiSolidCity /> {user.address + ", " + showFormattedDate(user.born_date)}</p>
                <p><MdPeopleAlt /> {user.gender === "p" ? "Perempuan" : "Laki-Laki"}</p>
                <p><CiTimer /> terakhir diubah pada {showFormattedDateTime(user.created_at)}</p>
            </div>
        </div>
    )

}
export default DetailContent