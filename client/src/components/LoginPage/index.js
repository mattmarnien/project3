import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./login.css"
import Input from '../Input'
import Button from '../Button'
import API from '../../utils/API'

function Login() {
    const [loginForm, setLoginForm] = useState([]);
    
    const handleInputChange = event => {
        const { name, value } = event.target;       
        setLoginForm({...loginForm, [name]:value})       
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(loginForm)
        API.userLogin(loginForm)
    }
    
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <h3 className='center'>Log in to your account</h3>
                <form id="signin" name="signin" method="post" action="signin">
                    <div className="row">
                        <label for="username">Username</label>
                        <Input className="text" name="username" type="text" onChange={handleInputChange}/>
                       
                        <label for="password">Password</label>
                        <Input name="password" type="password" onChange={handleInputChange}/>
                        
                    </div>
                    <div className='row center'>
                        <Button classes='btn-large' id='signUpBtn' onClick={handleFormSubmit}>Log in</Button>
                    </div>
                </form>
            </div>
            <h5>Don't have an account? <Link to="/signup">Sign up.</Link></h5>
        </>
    )
}

export default Login;