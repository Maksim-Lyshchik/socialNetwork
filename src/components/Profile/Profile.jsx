import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus}) => {
    return <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsConteiner  />
    </div>
}

export default Profile