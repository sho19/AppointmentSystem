import React from "react";
import "./Link-Button.scss";
import {Link} from "react-router-dom";

const CustomLinkComponent = ({children,isChangeAuth, ...otherprops}) =>(
    <Link className={'Navigation-button'} {...otherprops}>{children}</Link>
);
export default CustomLinkComponent;
