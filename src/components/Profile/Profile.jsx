import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsConteiner  />
    </div>
}

export default Profile