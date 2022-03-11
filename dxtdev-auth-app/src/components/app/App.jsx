import React, {useContext} from "react"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from "../../contexts/GlobalContext";
import Home from "../home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup"
import TopNavbar from "../topnavbar/TopNavbar";


function App() {
    const {token}=useContext(GlobalContext)
    return (
        <Container className="d-flex align-items-center 
                justify-content-center"
            style={{ minheight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Router>
                        <TopNavbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {token ==""? (
                            <>
                            <Route path='/signup' element={<Signup />} />
                            <Route path="login" element={<Login />} />
                            </>
                        ):("")}
                        <Route path="/*" element={<Navigate to={token ? "/":"/login"}/>}/>
                        
                    </Routes>
                </Router>
            </div>
        </Container>

    )
}

export default App;