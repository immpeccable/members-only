import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Link } from 'react-router-dom'


let BecomeAdmin = () => {

    return <form>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='admin-key'>Enter the admin key</label>
            <input className='sign-up-input' type="password" id = "admin-key" name  = "admin-key"></input>
        </div>
        <div>
            <input className='submit-button' type="submit" value="Become Admin" formMethod='POST' formAction='http://localhost:3000/home/become-admin'></input>
        </div>
    </form>

}

export default BecomeAdmin