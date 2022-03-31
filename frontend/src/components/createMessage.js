import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Link } from 'react-router-dom'


let CreateMessage = () => {

    return <form className='form-div'>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='title'>Title</label>
            <input className='sign-up-input' type="text" id="title" name="title"></input>
        </div>
        <div className='form-item'>
            <label className='sign-up-label' htmlFor='message'>Message</label>
            <textarea className='sign-up-input message-input' id = "message" name = "message"></textarea>
        </div>
        <div>
            <input className='submit-create-message' type="submit" value="Create" formMethod='POST' formAction='http://localhost:3000/home/create-message'></input>
        </div>
    </form>

}

export default CreateMessage