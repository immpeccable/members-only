import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'


let Login = () => {


    return  <form className='form-div'>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='username'>Username</label>
            <input className='sign-up-input' type="text" id = "username" name  = "username"></input>
        </div>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='password'>Password</label>
            <input className='sign-up-input' type="password" id = "password" name  = "password"></input>
        </div>
        <div>
            <input className='submit-log-in' type="submit" value="Log in" formMethod='POST' formAction='http://localhost:3000/home/log-in'></input>
        </div>
    </form>

}

export default Login