import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Link } from 'react-router-dom'


let BecomeMember = () => {

    return <form>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='member-key'>Enter the membership key</label>
            <input className='sign-up-input' type="password" id = "member-key" name  = "member-key"></input>
        </div>
        <div>
            <input className='submit-button' type="submit" value="Become Member" formMethod='POST' formAction='http://localhost:3000/home/become-member'></input>
        </div>
    </form>

}

export default BecomeMember