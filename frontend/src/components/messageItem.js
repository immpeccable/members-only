import React, { useEffect, useState } from 'react';
import '../App.css'


let MessageItem = (props) => {

    const [user, setUser] = useState({});

    useEffect(function(){

        let isSubscribed = true;
        fetchUser();
       
        async function fetchUser(){
            let cur = await fetch(`http://localhost:3000/home/get-user/${props.authorid}`);
            cur = await cur.json();
            if(isSubscribed){
                setUser(cur);
            }
            
        }
        
        return () => {
            isSubscribed = false;
        }
    }, [])

    function renderDelete(){
        if(props.userStatus === "admin"){
            return <form >
            <input className='delete' type="submit" formMethod='POST' formAction={`http://localhost:3000/home/delete-message/${props.msgid}`} value = "Delete" ></input>
        </form>
        }
    }

    //console.log(props.msgid);
    return <div className='message-item'>
        <div className='title'>
            <div>
                {props.title}
            </div>
            
            {renderDelete()}
            
        </div>
        <p className='content'>{props.message}</p>
        <div className='author'>{(props.userStatus === "member" || props.userStatus === "admin") ? user.user_name : "unknown"}</div>
        
    </div>

}

export default MessageItem