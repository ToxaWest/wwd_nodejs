import {combineReducers} from 'redux';
import AsideReducers from './aside';
import PostsReducers from './posts';
import ServicesReducers from './services';
import ActivePosts from './posts-active';
import SinglePost from './single-post';
import TouchDevice from './touchDevice';

const allReducers = combineReducers({
    aside : AsideReducers,
    post : PostsReducers,
    services : ServicesReducers,
    active : ActivePosts,
    singlePost : SinglePost,
    TouchDevice : TouchDevice
});

export default allReducers