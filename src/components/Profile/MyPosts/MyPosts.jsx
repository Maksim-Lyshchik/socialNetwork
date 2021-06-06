import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
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

const maxLength50 = maxLengthCreator(50);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newPostText' placeholder='Enter your post'
                   validate={[required, maxLength50]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'newPostForm'})(AddNewPostForm)