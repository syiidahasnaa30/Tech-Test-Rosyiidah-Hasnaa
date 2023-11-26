import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CreateUserPage from "./page/CreateUserPage"
import EditUserPage from "./page/EditUserPage"
import { useState } from "react"
import { getToken } from "./utils/authentication-api"
import LoginPage from "./page/LoginPage"
import { } from "./utils/user-api"
import RegisterPage from "./page/RegisterPage"

function App() {
  const [token, setToken] = useState(() => { return getToken() })
  console.log(token)

  if (token === null || token === "") {
    return (
      <div className="app-content">
        <main >
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>

        </main>
      </div>
    )
  }
  return (
    <div className="app-content">
      <main >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/add" element={<CreateUserPage />} />
          <Route path="/user/:id" element={<EditUserPage />} />
        </Routes>

      </main>
    </div>
  )
}

export default App
