import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'


let SignUp = () => {



    return <form className='form-div'>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='user_name'>Username</label>
            <input className='sign-up-input' type="text" id="user_name" name="user_name"></input>
        </div>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='password'>Password</label>
            <input className='sign-up-input' type="password" id="password" name="password"></input>
        </div>
        <div>
            <input className='submit-sign-up' type="submit" value="Sign Up" formMethod='POST' formAction='http://localhost:3000/home/sign-up'></input>
        </div>
    </form>


}

export default SignUp