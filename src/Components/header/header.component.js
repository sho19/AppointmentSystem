import "./header.styles.scss";
import {Link} from "react-router-dom";
import React from "react";
import {AuthContext} from '../../contexts/AuthContext';


export default function Header() {
    const {logout} = React.useContext(AuthContext);

    return (
        <div>
        <div className='header'>
            <div className='option' onClick={() => {logout()}}>
                SIGN OUT
            </div>
            <div className='option'>
            <Link className='route' to='/'>
                HOME
            </Link>
            <Link className='route'  to='/shop'>
                CONTACT
            </Link>
            </div>

        </div>
        </div>
    );

}