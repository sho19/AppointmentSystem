import React,{useState, useEffect} from "react";
import "./SignInSignUp.scss";
import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../../Components/custom-button/custom-Button.component";
import CustomLinkComponent from "../../Components/LinkStyles/Link-Button.component";
import {AuthContext} from '../../contexts/AuthContext';


export default function SignInComponent() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {signIn} = React.useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
            signIn({email, password});
    };


    const handleChange = event =>{
        const { name, value } = event.target;
        name=="email"?setEmail(value):setPassword(value)
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
