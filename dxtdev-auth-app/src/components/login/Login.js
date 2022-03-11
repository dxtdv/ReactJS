import React, {useState, useContext} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { GlobalContext } from '../../contexts/GlobalContext'
import {Link, useNavigate} from 'react-router-dom'



export default function Login() {


        const navigate = useNavigate()
    
        const {isLoading, signIn } = useContext(GlobalContext)
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
    
    
    
        const signin = async (e) => {
            e.preventDefault();
    
            const data = {
                email, password
            }
    
            signIn(data);
            navigate("/")
        }

  return (
    <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Log in</h1>
                    <Form action="" onSubmit={signin}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            {/* <Form.Control type="password" value={passwordConfirmation} onChange={(e)=>(e.target.password)} required /> */}
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit"> {isLoading? "Login..." :"Login"}</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                You need an account? <Link to="/signup">SignUp</Link> 
            </div>
        </>
  )
}
