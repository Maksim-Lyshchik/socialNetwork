import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
{/*
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>{props.state.name}</NavLink>
            </div>*/}

            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friendsbar' activeClassName={s.active}>Friends</NavLink>
                <div className={s.imgFriends}>
                    <div className={s.imgFriend}>
                        <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg'/>
                        <div>Nastya</div>
                    </div>
                    <div className={s.imgFriend}>
                        <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg'/>
                        <div>Nikolay</div>
                    </div>
                    <div className={s.imgFriend}>
                        <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg'/>
                        <div>Vova</div>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Navbar