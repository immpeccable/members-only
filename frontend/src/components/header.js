import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Link } from 'react-router-dom'



let Header = () => {

    const [logInfo, setLogInfo] = useState({ logStatus: false, userInfo: null });


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

    function BecomeAdminMemberBar() {
        console.log(logInfo.userInfo.status);
        if (logInfo.userInfo.status === "none") {
            return <>
                <Link to="/home/become-member">
                    <button>
                        Become Member
                    </button>
                </Link>
                <Link to="/home/become-admin">
                    <button>
                        Become Admin
                    </button>
                </Link></>
        } else if (logInfo.userInfo.status === "member") {
            return <Link to="/home/become-admin">
                <button>
                    Become Admin
                </button>
            </Link>
        }
    }

    if (logInfo.logStatus) {
        return <div className='header'>
            <Link to = "/home">
                <button id="back-home-button">
                    Members Only
                </button>
            </Link>

            <div className='left-side'>
                <Link to="/home/create-message">
                    <button>Create Message</button>
                </Link>

                {BecomeAdminMemberBar()}

                <form>
                    <input type="submit" formMethod='POST' formAction='http://localhost:3000/home/log-out' value="Log out"></input>
                </form>
            </div>
        </div>

    } else {
        return <div className='header'>

            <Link to = "/home">
                <button id="back-home-button">
                    Members Only
                </button>
            </Link>

            <div className='left-side'>
                <Link to="/home/sign-up">
                    <button>
                        Sign up
                    </button>
                </Link>

                <Link to="/home/log-in">
                    <button>
                        Log in
                    </button>
                </Link>
            </div>

        </div>
    }

}

export default Header;