import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChenged, users, ...props}) => {

    return (<div>
        <Paginator currentPage={currentPage} onPageChenged={onPageChenged} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}
                                 key={u.id}/>
            )}
    </div>)
}

export default Users;