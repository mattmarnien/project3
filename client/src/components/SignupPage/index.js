import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css"
import Input from '../Input'
import Button from '../Button'
import API from "../../utils/API"

function Signup() {
    const [signupForm, setSignupForm] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSignupForm({ ...signupForm, [name]: value })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        API.addUser(signupForm)
    }

    return (
        <>
            <div className='container'>
                <h3 className='center'>Create an Account</h3>
                <div className='center' id='signupAlertDiv'></div>
                <div className="row">
                    <form className="col s12" id="signUpForm">
                        <Input className="input-field singularityInput col s6"
                            name="email" placeholder="Email" id="signUpEmail" type="email" className='validate' required onChange={handleInputChange} />
                        <span className="helper-text" data-error="Please enter an email adress"></span>
                        <Input className="input-field singularityInput col s6"
                            name="username" placeholder="Username" id="signUpUsername" type="text" className='validate' required onChange={handleInputChange} />
                        <span className="helper-text" data-error="Please enter a username"></span>
                        <Input className="input-field singularityInput col s6"
                            name="password" placeholder="Password" id="signUpPassword" type="password" className='validate' required onChange={handleInputChange} />
                        <span className="helper-text" data-error="Please make a password"></span>
                        <Input className="input-field singularityInput col s6"
                            name="confirmPassword" placeholder="Confirm Password" id="signUpConfirmPassword" type="password" className='validate' required onChange={handleInputChange} />
                        <span className="helper-text" data-error="Please confirm your password"></span>
                        <div className='row center'>
                            <Button classes='waves-effect waves-light center btn-large' id='signUpBtn' onClick={handleFormSubmit}>Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div>
            <h5>Already have an account? <Link to="/login">Log in.</Link></h5>
        </>
    )
}

export default Signup;