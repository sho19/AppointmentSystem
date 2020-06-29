import React from "react";
import "./custom-Button.scss";

const CustomButtonComponent = ({children,isChangeAuth, ...otherprops}) =>(
    <button className={`${isChangeAuth?'change-auth-type':''} custom-button`} {...otherprops}>{children}</button>
);
export default CustomButtonComponent;
