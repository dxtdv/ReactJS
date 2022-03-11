import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

export default function Home() {
    const navigate = useNavigate()

    const login =  () => {
        console.log("button log in clicked")
        navigate("/login")
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Hi</h1>
                        {auth.currentUser?.email ? auth.currentUser?.email :
                            <>
                                <h2>please Log In!</h2>
                                <Button className="w-100 mt-2" onClick={login}>Log In</Button>
                            </>
                        }
                </Card.Body>
            </Card>
        </>
    )
}
