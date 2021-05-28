import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://34travel.me/media/posts/5f50a0c8afab4-hrodna-pan940.jpg'/>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header