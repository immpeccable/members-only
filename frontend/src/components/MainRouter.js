import React, { Component } from 'react';
import Home from './Home';
import SignUp from './SignUp';
import Login from './LogIn';
import CreateMessage from './createMessage';
import Header from './header';
import Footer from './footer';
import BecomeAdmin from './becomeAdmin';
import BecomeMember from './becomeMember';

import '../App.css'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

export class MainRouter extends Component {

  render() {
    return <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path = "/home/sign-up" element = {<SignUp></SignUp>}></Route>
        <Route exact path = "/home/log-in" element = {<Login></Login>}></Route>
        <Route exact path = "/home/create-message" element = {<CreateMessage></CreateMessage>}></Route>
        <Route exact path = "/home/become-member" element = {<BecomeMember></BecomeMember>}></Route>
        <Route exact path = "/home/become-admin" element = {<BecomeAdmin></BecomeAdmin>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  }

}

