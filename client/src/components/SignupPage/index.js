import React from "react";
import { Link } from "react-router-dom";
import "./signup.css"

function Signup() {

    return (
        <>
            <div className='container'>
                <h3 className='center'>Create an Account</h3>
                <div className='center' id='signupAlertDiv'></div>
                <div className="row">
                    <form className="col s12" id="signUpForm">
                        <div className="row">
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="firstname">First Name</label>
                                <input name="firstname" placeholder="First name" id="signUpFirstname" type="text" />
                            </div>
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="lastname">Last Name</label>
                                <input name="lastname" placeholder="Last name" id="signUpLastname" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="email">Email</label>
                                <input name="email" placeholder="Email" id="signUpEmail" type="email" className='validate' required />
                                <span className="helper-text" data-error="Please enter an email adress"></span>
                            </div>
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="username">Username</label>
                                <input name="username" placeholder="Username" id="signUpUsername" type="text" className='validate' required />
                                <span className="helper-text" data-error="Please enter a username"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="password">Password</label>
                                <input name="password" placeholder="Password" id="signUpPassword" type="password" className='validate' required />
                                <span className="helper-text" data-error="Please make a password"></span>
                            </div>
                            <div className="input-field unBoxInput col s6">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input name="confirmPassword" placeholder="Confirm Password" id="signUpConfirmPassword" type="password" className='validate' required />
                                <span className="helper-text" data-error="Please confirm your password"></span>
                            </div>
                        </div>
                        <div className='row center'>
                            <button className='waves-effect waves-light center btn-large' id='signUpBtn'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <h5>Already have an account? <Link to="/login">Log in.</Link></h5>
        </>
    )
}

export default Signup;