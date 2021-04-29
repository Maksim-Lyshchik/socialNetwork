import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img src='https://wallpapersprinted.com/download/2/neytiri_2017_avatar_2-wallpaper-1680x1050.jpg'/>
            </div>
            <div className={s.discriptionBlock}>
                discription
            </div>
        </div>
    )
}

export default ProfileInfo