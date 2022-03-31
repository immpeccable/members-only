import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import MessageItem from './messageItem';



let Home = () => {

    const [messages, setMessages] = useState([]);

    const [logInfo, setLogInfo] = useState({logStatus: false, userInfo: null});


    useEffect(() => {

        let isSubscribed = true;
        fetchUser()
        async function fetchUser() {

            let status = await fetch("http://localhost:3000/home/log-in", { credentials: 'include' })
            status = await status.json();
            //console.log(status);
            if (isSubscribed) {
                setLogInfo(status);
            }

        }
        return () => {
            isSubscribed = false;
        }

    }, [logInfo])

    useEffect(() => {

        let isSubscribed = true;
        fetchMessages();

        async function fetchMessages() {
            let message = await fetch("http://localhost:3000/home");
            //console.log(message);
            if (message) {
                message = await message.json();
            }
            if (isSubscribed) {
                setMessages(message);
            }
        }

        return () => {
            isSubscribed = false;
        }

    }, [])

    function renderItems(){
        return messages.map((el) => {
            return <MessageItem msgid = {el._id} userStatus = {logInfo.userInfo ? logInfo.userInfo.status : "none"} title={el.title} message={el.message} authorid={el.author} ></MessageItem>
        })
    }
    return <div className='message-grid'>
        {renderItems()}
    </div>

}

export default Home