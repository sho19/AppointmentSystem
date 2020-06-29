import React,{useState, useEffect} from "react";
import "./SignInSignUp.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-Button.component";
import {Link} from 'react-router-dom';
import CustomLinkComponent from "../LinkStyles/Link-Button.component";

export default function SignInComponent() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputs;
    const handleSubmit = async event =>{
        event.preventDefault();
        try {
        }
        catch (e) {
            console.log(e)
        }
    };


    const handleChange = event =>{
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    return(
        <div>
            <div className="sign-in-sign-up"></div>
            <div className="sign-in-sign-up">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name={"email"} value={email} required onChange={handleChange} label={"email"}/>
                    <FormInput type="password" value={password} required name={"password"} onChange={handleChange} label={"password"}/>
                    <div className="buttons">
                        <CustomButton type={"submit"} value={"Submit Form"} >Sign in</CustomButton>
                        <CustomLinkComponent to='/sign-up'>
                            Register
                        </CustomLinkComponent>
                    </div>
                </form>
            </div>
        </div>
    );
}
