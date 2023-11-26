import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CreateUserPage from "./page/CreateUserPage"
import EditUserPage from "./page/EditUserPage"

function App() {
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
