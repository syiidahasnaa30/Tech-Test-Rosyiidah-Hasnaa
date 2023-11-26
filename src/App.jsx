import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CreateUserPage from "./page/CreateUserPage"

function App() {
  return (
    <div className="app-content">
      <main >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/add" element={<CreateUserPage />} />
          <Route path="/user/:id" element={<CreateUserPage />} />
        </Routes>

      </main>
    </div>
  )
}

export default App
