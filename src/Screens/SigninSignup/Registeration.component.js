import React,{useState, useEffect} from "react";
import "./SignInSignUp.scss";
import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../../Components/custom-button/custom-Button.component";
import CustomLinkComponent from "../../Components/LinkStyles/Link-Button.component";
import {AuthContext} from '../../contexts/AuthContext';


export default function RegisterationComponent() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [description, setdescription] = React.useState('');
    const {signUp} = React.useContext(AuthContext);

    const handleSubmit = async event =>{
        event.preventDefault();
        signUp({name, email, password, description});
    };

    const handleChange = event =>{
        const { name, value } = event.target;
        // setInputs(inputs => ({ ...inputs, [name]: value }));
        name=="email"?setEmail(value):name=="name"?setName(value):name=="password"?setPassword(value):setdescription(value)

    };


    return(
        <div className="sign-in-sign-up">
            <h2>I Dont have an account</h2>
            <span>Create a new Account</span>
            <form onSubmit={handleSubmit}>
                <FormInput name={"name"} value={name} required onChange={handleChange} label={"Name"}/>
                <FormInput name={"email"} value={email} required onChange={handleChange} label={"Email"}/>
                <FormInput type="password" value={password} required name={"password"} onChange={handleChange} label={"Password"}/>
                <FormInput name={"description"} value={description} required onChange={handleChange} label={"Description"}/>
                <div className="buttons">
                    <CustomButton type={"submit"} value={"Submit Form"} >Sign Up</CustomButton>
                    <CustomLinkComponent to='/'>
                        LOGIN
                    </CustomLinkComponent>
                </div>
            </form>
        </div>
    );
}
