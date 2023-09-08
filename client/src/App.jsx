import { Routes, Route } from "react-router-dom"
import { HomePage } from "./Pages/export"
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route index="/" element={<HomePage />}></Route>
    </Routes>
    </>
  )
}

export default App
