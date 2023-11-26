import { useEffect, useState } from "react";
import TableUser from "../components/TableUser"
import { GrAdd } from "react-icons/gr";
import { getAllUser } from "../utils/user-api"
import { Link } from "react-router-dom";

const HomePage = () => {
    const [users, setUsers] = useState([])

    const getUser = async () => {
        setUsers(await getAllUser())
    }

    useEffect(() => {
        getUser()

    }, [users])
    return (
        <>
            <TableUser users={users} />
            <div className="app-content__action">
                <button className="action">
                    <Link to="/user/add">
                        <GrAdd />
                    </Link>

                </button>
            </div>
        </>
    )
}

export default HomePage