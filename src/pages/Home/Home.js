import React from "react";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
require ("./home.css")

const Home = () => {
    return(
        <div>
            <div className="welcomeContainer">
        <div id="welcomeMessage">
        <h1>Welcome to Homebase!</h1>
        <h2>Login or Register to see your team's clubhouse!</h2><br/>
        <button><a href="/manager">Click Here If You're a Manager or Coach</a></button><br/><br/>
        <button><a href="/teammate">Click Here If You're a Player or Parent</a></button>
        </div>
        </div>
        <Footer/>
        </div>

    )}

export default Home