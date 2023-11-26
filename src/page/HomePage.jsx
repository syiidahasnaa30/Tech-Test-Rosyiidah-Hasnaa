import { useEffect, useState } from "react";
import TableUser from "../components/TableUser"
import { GrAdd } from "react-icons/gr";
import { getAllUser } from "../utils/user-api"
import { Link } from "react-router-dom";
import LoadingElement from "../components/LoadingElement";

const HomePage = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        try {
            setUsers(await getAllUser())
        } catch (error) {
            alert(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getUser()

    }, [users])

    if (loading) {
        return <LoadingElement />
    } else {
        return (
            <div>
                <h1>Selamat Datang </h1>
                <p>Di Techinal test milik Rosyiidah Hasnaa</p>
                <TableUser users={users} />
                <div className="app-content__action">
                    <button className="action">
                        <Link to="/user/add">
                            <GrAdd />
                        </Link>

                    </button>
                </div>
            </div>
        )
    }

}

export default HomePage