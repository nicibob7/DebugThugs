import { Routes, Route } from "react-router-dom"
import { HomePage, TimetablePage } from "./Pages/export"
import { NavBar, TimeTable } from "./Components/export"
import './App.css'

function App() {

  return (
    <>
    <TimeTable />
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="timetable" element={<TimetablePage />} />
                {/* <Route path="profile" element={<ProfilePage />} /> */}
            </Route>
            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="register" element={<RegisterPage />} /> */}
        </Routes>
    </>
);
}

export default App
