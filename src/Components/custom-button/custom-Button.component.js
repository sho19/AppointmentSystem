import React from "react";
import "./custom-button.scss";

const CustomButtonComponent = ({children, ...otherprops}) =>(
    <button className={`custom-button`} {...otherprops}>{children}</button>
);
export default CustomButtonComponent;
