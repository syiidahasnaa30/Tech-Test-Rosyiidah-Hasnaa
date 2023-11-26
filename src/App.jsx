import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CreateUserPage from "./page/CreateUserPage"
import EditUserPage from "./page/EditUserPage"
import { useState } from "react"
import { getToken } from "./utils/authentication-api"
import LoginPage from "./page/LoginPage"
import RegisterPage from "./page/RegisterPage"
import { FaCopyright } from "react-icons/fa6";
import NotFoundPage from "./page/NotFoundPage"

function App() {
  const [token, setToken] = useState(() => { return getToken() })
  console.log(token)

  if (token === null || token === "") {
    return (
      <div>
        <main >
          <Routes>
            <Route path="/*" element={<LoginPage setToken={setToken} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    )
  }
  return (
    <div >
      <main className="app-content" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/add" element={<CreateUserPage />} />
          <Route path="/user/:id" element={<EditUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <p><FaCopyright /> Rosyiidah Hasnaa 2023</p>
      </footer>
    </div>
  )
}

export default App
