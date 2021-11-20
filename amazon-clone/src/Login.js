import React, {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'; //usehistory allows to programatically change URL
import './Login.css'
import {auth} from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e=>{
        e.preventDefault() //Prevents refresh of page on click of submit button

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/');
            })
            .catch(error=>alert(error.message))
    }

    const register = e=>{
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(()=>{
                if(auth){
                    history.push('/')
                }
                
            })
            .catch(error=>alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={
                        e=>setEmail(e.target.value)
                    }/>


                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={
                        e=>setPassword(e.target.value)}/>

                    <button className='login_signInButton'
                    type='submit'
                    onClick={signIn}
                    >Sign In</button>
                    <button className='login_registerButton'
                    onClick = {register}
                    >Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
