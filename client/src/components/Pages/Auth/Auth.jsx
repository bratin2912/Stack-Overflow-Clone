import React, { useState } from 'react'
import logo from '../../../assets/favicon.ico'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AboutAuth from './AboutAuth';
import { signup,login } from '../../../redux/actions/auth';
import '../Auth/Auth.css'
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [details,Setdetails] = useState({name:"",email:"",password:""});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSwitch = () => {
        setIsSignup(!isSignup);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!details.email && !details.password){
            alert("Enter email and password")
        }
        if(isSignup){
            if(!details.name){
                alert("Enter name to continue")
            }
            dispatch(signup(details,navigate))
        }
        else{
            dispatch(login({email:details.email,password:details.password},navigate))
        }
    }
    return (
        <section className='auth-section'>
            {isSignup && <AboutAuth/>}
            <div className='auth-container'>
                {!isSignup && <img src={logo} alt='Stack overflow logo' width='70' />}
                <form onSubmit={handleSubmit}>
                    {isSignup &&
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" name='name' id='name' onChange={(e)=>{Setdetails({...details,name:e.target.value})}}/>
                        </label>
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e)=>{Setdetails({...details,email:e.target.value})}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:'flex' ,justifyContent:'space-between'}}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{color:'#007ac6', fontSize:'13px',cursor:'pointer'}}>Forgot password?</p>}
                        </div>
                        <input type="password" name='password' id='password' onChange={(e)=>{Setdetails({...details,password:e.target.value})}}/>
                        {isSignup && <p style={{color:'#666767',fontSize:'13px'}}>Password must contain at least eight<br />
                            characters,including at least 1 letter and 1<br />
                            number</p>}
                    </label>
                    {
                        isSignup &&
                        <label htmlFor="check">
                            <input type="checkbox" name='check' id='check' />
                            <p >Opt-in to recive occasional
                                product updates, user<br/>research invitations,
                                company announcements and digests
                            </p>
                        </label>
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Sign in'}</button>
                    {
                        isSignup && 
                        <p style={{color:'#666767',fontSize:'13px'}}>
                            By clicking 'Sign up', you are agree to our 
                            <span style={{color:'#007ac6'}}> terms of</span><br/>service, 
                            <span style={{color:'#007ac6'}}> privacy policy</span> and 
                            <span style={{color:'#007ac6'}}> cookie policy</span>
                        </p>
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Dont't have an account?"}
                    <button className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Log in' : 'Sign up'}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth