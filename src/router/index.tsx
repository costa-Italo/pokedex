import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "../components/pages/Profile"
import Home from "../components/pages/Home"

const Router = () => {
    return (
<BrowserRouter>
        <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
        </BrowserRouter>

        
    )
}

export default Router