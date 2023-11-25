import { useEffect, useState } from "react"
import TableUser from "./components/TableUser"
import getAllUser from "./utils/getAllUser"

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUser = async () => {
      setUsers(await getAllUser())
    }
    getUser()

  }, [])

  return (
    <div className="app-content">
      <h1>Rosyiidah Hasnaa</h1>
      <p>syiidahasnaa30@gmail.com</p>
      <TableUser users={users} />
    </div>
  )
}

export default App
