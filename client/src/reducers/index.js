import {combineReducers} from 'redux';
import AsideReducers from './aside';
import PostsReducers from './posts';
import ServicesReducers from './services';
import ActivePosts from './posts-active';
import SinglePost from './single-post';

const allReducers = combineReducers({
    aside : AsideReducers,
    post : PostsReducers,
    services : ServicesReducers,
    active : ActivePosts,
    singlePost : SinglePost
});

export default allReducers