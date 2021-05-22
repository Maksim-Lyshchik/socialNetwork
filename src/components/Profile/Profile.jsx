import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsConteiner  />
    </div>
}

export default Profile