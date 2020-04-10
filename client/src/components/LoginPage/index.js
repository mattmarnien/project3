import React from "react";
import { Link } from "react-router-dom";
import "./login.css"

function Login() {
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <h3 className='center'>Log in to your account</h3>
                <form id="signin" name="signin" method="post" action="signin">
                    <div className="row">
                        <label for="username">Username</label>
                        <input className="text" name="email" type="text" />
                        <label for="password">Password</label>
                        <input name="password" type="password" />
                    </div>
                    <div className='row'>
                        <button className='waves-effect waves-light center btn-large' id='signUpBtn'>Log in</button>
                    </div>
                </form>
            </div>
            <h5>Don't have an account? <Link to="/signup">Sign up.</Link></h5>
        </>
    )
}

export default Login;