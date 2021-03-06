
import React, { useContext, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { GlobalContext } from '../../contexts/GlobalContext'
import {Link, useNavigate} from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()

    const {isLoading, signUp } = useContext(GlobalContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const signup = async (e) => {
        e.preventDefault();

        const data = {
            email, password
        }

        signUp(data);
        navigate("/login")
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Sign Up</h1>
                    <Form action="" onSubmit={signup}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            {/* <Form.Label>Password Confirmation</Form.Label> */}
                            {/* <Form.Control type="password" value={passwordConfirmation} onChange={(e)=>(e.target.password)} required /> */}
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit"> {isLoading? "Signup..." :"Signup"}</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </>
    )
}

export default Signup;