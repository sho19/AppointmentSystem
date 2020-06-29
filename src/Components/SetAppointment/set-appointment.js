import React,{useState, useEffect} from "react";
import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../../Components/custom-button/custom-Button.component";
import {UserContext} from "../../contexts/UserConetext";
import axios from "axios";


export default function SetAppointment() {
    const userData = React.useContext(UserContext);
    const [fromTime, setFromTime] = React.useState('');
    const [toTime, setToTime] = React.useState('');
    const [isloading, setloading] = React.useState(true);

    const handleChange = event =>{
        const { name, value } = event.target;
        name=="toTime"?setToTime(value):setFromTime(value)
    };

    const handleSubmit = event =>{
        event.preventDefault();
        var regex=/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i;
        if(regex.test(fromTime)&&regex.test(toTime)){
            if(fromTime==toTime){
                alert("Start and to time cannot be same")
            }
            else{
            setloading(true);
            const options = {
                url: `https://myappointmentsystem.herokuapp.com/setAvailableTime/${userData.userName}`,
                method: 'POST',
                data: {
                    from: fromTime,
                    to: toTime
                },
            };
            axios(options)
                .then((response) => {
                    let result = response.data;
                    console.log(result, 'ee');
                    if (result == 'updated sucessfully') {
                        console.log(response.toString());
                    }
                    setloading(false);
                })
                .catch((e) => {
                    setloading(false);
                    console.log(e, 'ee');
                });
            }
        }
        else{
            alert("invalid date or time format")
        }
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <FormInput name={"fromTime"} value={fromTime} required onChange={handleChange} label={"From Time format:hh:mm"}/>
            <FormInput  value={toTime} required name={"toTime"} onChange={handleChange} label={"To Time format: hh:mm"}/>
            <div className="buttons">
                <CustomButton type={"submit"} value={"Submit Form"} >SET TIME</CustomButton>
            </div>
            </form>
        </div>
    )
}