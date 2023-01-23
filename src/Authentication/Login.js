import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"
import { useUserAuth } from '../context/AuthContext';
import { EmailAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


export default function Login() {

    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const {logIn,googleSignIn} = useUserAuth();


    const[authentication,setAuthentication] = useState(localStorage.getItem(localStorage.getItem('authentication') || false));

    
   const handleChangeEmail =(event)=>
    {
        setEmail(event.target.value);
    }

    const handleChangePassword =(event)=>
    {
        setPassword(event.target.value)
    }

    const register =() =>
    {
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(auth=>{navigate("/home")})
        // .catch(error=>console.log(error))

        navigate("/signup")
    }

    const LogIn = (e) =>
    {
        e.preventDefault();

        logIn(email,password)
        .then(auth=>navigate("/home"))
       
    }

    const alertMsg = (e)=>
    {
        if(email==="")
        {alert(e);}
        else {alert("Wrong Credentail");}
    }


    // const GoogleSignIn = () =>
    // {
        
    // }
    const googleSign=()=>{
        googleSignIn();
    }

  return (
    <div>
        <div className="login-page">
        <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">SaveMotivation</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>LogIn</h2>
                        <div className='p-2'>
                        <span className='google-btn border border-danger p-2 ps-2 pe-2' onClick={googleSign}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-google pe-2 pb-1" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
                            Google</span>
                    </div>
					</div>
					<div className="row">
							<div className="row">
								<input onChange={handleChangeEmail} type="email" className="form__input" placeholder="Email"/>
							</div>
							<div className="row">
								<input onChange={handleChangePassword} type="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
							</div>
							<div className="row">
                            <button className='btn' type='submit' onClick={LogIn}>Login</button>
                            <a className='btn' onClick={register}>Register</a>
							</div>
					</div>
					{/* <div className="row">
                        <button className='btn' onClick={register}>Register</button>
					</div> */}
				</div>
			</div>
		</div>
	</div>
	<div className="container-fluid text-center footer">
		Coded with &hearts; by <a href="/">.</a>
	</div>
        {/* <div>
            <label>Email</label>
        <input onChange={handleChangeEmail} type="email" name="email"/>
        </div>
        <div>
            <label>Password</label>
        <input onChange={handleChangePassword} type="password" name="email"/>
        </div>
        <div>
        <button className="btn" onClick={LogIn} type="submit">Login</button>
        </div>
        <div>
            <button className="btn" onClick={register} >SignUp</button>
        </div>
        <div>
            <button className="btn" onClick={GoogleSignIn}></button>
        </div>
         */}
         
         </div>
    </div>
  )
}
