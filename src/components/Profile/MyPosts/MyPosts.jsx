import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let addNewPost = (value) => {
        alert('value.newPostText')
    }

    return (<div className={s.postBlock}>
        <h3>My post</h3>
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div className={s.content}>
            {postsElement}
        </div>
    </div>)
}

export default MyPosts


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostText' placeholder='Enter your post'/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'newPostForm'})(AddNewPostForm)