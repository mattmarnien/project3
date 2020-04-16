import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "./login.css"
import Input from '../Input'
import Button from '../Button'
import API from '../../utils/API'

function Login(props) {
    const [loginForm, setLoginForm] = useState([]);
    const [alertInfo, setAlertInfo] = useState({value: ''});
    
    const handleInputChange = event => {
        const { name, value } = event.target;       
        setLoginForm({...loginForm, [name]:value})       
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(loginForm)
        API.userLogin(loginForm).then(data => {
            console.log(data)
          
            if(data.status === 200){
                // props.history.push('/user')
              
                 window.location='/user'
                // props.history.push('/user')
                // window.location.reload();
                // window.location='/user'
            }
            else{
               
                setAlertInfo({value: 'Incorrect username or password'})
            }
        
        })
        
            

    }
    
    
    
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <h3 className='center'>Log in to your account</h3>
                <h5 className='center' value=''>{alertInfo.value}</h5>
                <form id="signin" name="signin" method="post" action="signin">
                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <Input className="text" name="username" type="text" onChange={handleInputChange}/>
                       
                        <label htmlFor="password">Password</label>
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

export default withRouter(Login);
