import { Routes, Route } from "react-router-dom"
import { HomePage } from "./Pages/export"
import { NavBar } from "./Components/export"
import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route index="/" element={<HomePage />}></Route>
    </Routes>
    </>
  )
}

export default App
