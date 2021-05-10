import React from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../utils/Firebase/firebase';
import {Login} from '../components';
import { Banner} from '../components';
import { useRef } from 'react';
export default function LoginContainer(){

    const history = useHistory();
const EmailRef = useRef(null);
const PasswordRef = useRef(null);

const userSignin=(e)=> {
    e.preventDefault();
    auth.signInWithEmailAndPassword(EmailRef.current.value, PasswordRef.current.value).then((authuser)=>{

    }).catch((error)=> console.log(error))
}
const RedirectToSignup=()=>{
    history.push('/');
}

    return(
        <Banner>
            <Banner.Topbar>
            <Banner.Logo src="images/netflix-logo.png"/>
            </Banner.Topbar>
        <Banner.TextConatiner>
            <Login>
                <Login.Form>
                <Login.Title>Sign In</Login.Title>
                <Login.TextField ref={EmailRef }type="text" placeholder="Email Address"></Login.TextField>
                <Login.TextField ref={PasswordRef} type="password" placeholder="password"></Login.TextField>
                <Login.Button type="submit" onClick={userSignin}>Sign In</Login.Button>
                <Login.SignupBlock>
                <Login.SignupTitle>New to Netflix?</Login.SignupTitle>
                <Login.SignupLink onClick={RedirectToSignup}>Sign up now</Login.SignupLink>
                </Login.SignupBlock>
                </Login.Form>
            </Login>
        </Banner.TextConatiner>
        
    </Banner>
        
    )
    
}