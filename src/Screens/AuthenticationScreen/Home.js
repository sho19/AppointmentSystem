import './Home.scss';
import "../SigninSignup/SignInSignUp.scss";
import React, { useState, useEffect } from "react";
import {UserContext} from '../../contexts/UserConetext';
import axios from 'axios';
import SetAppointment from "../../Components/SetAppointment/set-appointment";

export default function Home(props) {
    const [isloading, setloading] = React.useState(true);
    const [clients, setclients] = useState([]);
    const userData = React.useContext(UserContext);

    useEffect(() => {
        const options = {
            url: `https://myappointmentsystem.herokuapp.com/appointments/${userData.userName}?category=service_provider`,
            method: 'GET',
        };
        axios(options)
            .then((res) => {

                setclients(res.data[0].appointments);
                console.log(res.data);
                setloading(false);
            })
            .catch((e) => {
                console.log(e);
                setloading(false);
            });
        }, []);

    // customer: "rfoe@gmail.com"
    // date: "2-01-2220"
    // email: "rfoe@gmail.com"
    // time: "12:00"


    function reject(client) {
         setloading(true);
         const options = {
                 url: `https://myappointmentsystem.herokuapp.com/rejectAppointment/${client.email}/${userData.userName}`,
             method: 'POST',
             data: {
                 selectedTime: client.time,
                 date: client.date
             },
         };
         axios(options)
             .then((response) => {
                 let result = response.data;
                 console.log(result, 'ee');
                 if (result == 'deleted successfully') {
                     console.log(response.toString());
                 }
                 setloading(false);
             })
             .catch((e) => {
                 setloading(false);
                 console.log(e, 'ee');
             });
    }

    return(
        <>
        {isloading ?
                (
                    <h1>Loading...</h1>
                ):(
                <div>
                    <div className="sign-in-sign-up">
                        <h2>Set my availability time</h2>
                        <SetAppointment/>
                    </div>
                    <h2 className={"head"}>My Appointments</h2>
                    <div className={"parent-card"}>
                        {clients.map((client,index)=>(
                            <div className="card" key={index}>
                                <div className="container" >
                                    <h4><b>{client.email}</b></h4>
                                    <p>{`date:${client.date} time:${client.time}`}</p>
                                </div>
                                <a onClick={e => {reject(client)}} className="reject">Reject</a>
                            </div>

                        ))}
                    </div>
                </div>
                )}

                </>

    )


}