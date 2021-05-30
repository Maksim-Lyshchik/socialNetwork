import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from '../../common/Preloader/Preloader';
import jobLooking from '../../../assets/images/job.svg';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
    <div>
{/*        <div className={s.background}>
            <img src='https://wallpapersprinted.com/download/2/neytiri_2017_avatar_2-wallpaper-1680x1050.jpg'/>
        </div>*/}
        <div className={s.discriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={'Hello, my friends!'}/>
            <div>
                <h2>{props.profile.fullName}</h2>
                <span>{props.profile.aboutMe}</span>
                <div className={s.jomImg}><img src={props.profile.lookingForAJob ? jobLooking : null}/></div>
                <div>
                    <h3>Contacts</h3>
                    <div><a href={props.profile.contacts.vk}>Vkontakte</a></div>
                    <div><a href={props.profile.contacts.instagram}>Instagram</a></div>
                    <div><a href={props.profile.contacts.github}>GitHub</a></div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ProfileInfo