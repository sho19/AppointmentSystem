import React, { useState, useEffect } from "react";
import SignInComponent from "../SigninSignup/SignInComponent";
import RegisterationComponent from "../SigninSignup/Registeration.component";
import './Authentication-screen.scss'

export default function AuthenticationScreen(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/links/")
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // << super important array

    return(
        <div className={"main-container"}>
             <SignInComponent />
        </div>
    )


}