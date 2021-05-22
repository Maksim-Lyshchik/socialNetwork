import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togglIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togglIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.togglIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.togglIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.togglIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChenged={this.onPageChenged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

/*let mapDispatchToProps = (dispatch) => {
    follow: (userId) => {
        dispatch(followAC(userId));
    },
        unfollow
:
    (userId) => {
        dispatch(unfollowAC(userId));
    },
        setUsers
:
    (users) => {
        dispatch(setUsersAC(users));
    },
        setCurrentPage
:
    (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
        setTotalUsersCount
:
    (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
    },
        togglIsFetching
:
    (isFetching) => {
        dispatch(togglIsFetchingAC(isFetching))
    }
}
}*/



export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, togglIsFetching })(UsersContainer);