import React,{useState, useEffect} from "react";
import "./SignInSignUp.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-Button.component";
import CustomLinkComponent from "../LinkStyles/Link-Button.component";

export default function RegisterationComponent() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        description: '',
    });
    const {name, email, password, description} = inputs;
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
                    <CustomLinkComponent to='/sign-in'>
                        LOGIN
                    </CustomLinkComponent>
                </div>
            </form>
        </div>
    );
}
