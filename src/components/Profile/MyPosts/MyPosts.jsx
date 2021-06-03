import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../../hoc/widhChildProps";

const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

/*    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let addNewPost = (value) => {
        alert('value.newPostText')
    }*/

    return (<div className={s.postBlock}>
        <h3>My post</h3>
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div className={s.content}>
            {postsElement}
        </div>
    </div>)
}

export default MyPosts

export const Textarea = Element('textarea');
const maxLength50 = maxLenghtCreator(50);

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