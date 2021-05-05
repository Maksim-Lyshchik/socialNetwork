import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);