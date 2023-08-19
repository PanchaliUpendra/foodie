import React,{useState} from 'react';

import './Login.css';


function Login(){
    const[signin,setsignin]=useState(false);
    
    return(
        <>
            <div className={signin?'login-con-inactive':'login-con-sign-up'}>
                <h1>Sign In</h1>
                <form>
                    <label>Gmail</label>
                    <input type='email' placeholder='email'  />
                    <label>Password:</label>
                    <input type='password' placeholder='password' />
                    <button >Sign In</button>
                </form>
                <p>Don’t have an Account?<span onClick={()=> setsignin(!signin)}  className='login-final-decision-btn'> Create account </span></p>
                </div>
            
            {/*sign up box using firebase */}
                <div className={signin?'login-con-sign-up':'login-con-inactive'}>
                <h1>Sign Up</h1>
                <form>
                    <label>Gmail</label>
                    <input type='email' placeholder='email' />
                    <label>Password:</label>
                    <input type='password' placeholder='password' />
                    <label>Confirm Passwords:</label>
                    <input type='password' placeholder='confirm password' />
                    <button >Sign Up</button>
                </form>
                <p>Already have an Account? <span onClick={()=> setsignin(!signin)}  className='login-final-decision-btn'>Sign In</span></p>
                </div>
        </>
    );
}

export default Login;