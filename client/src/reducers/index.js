import {combineReducers} from 'redux';
import AsideReducers from './aside';
import PostsReducers from './posts';

const allReducers = combineReducers({
    aside : AsideReducers,
    post : PostsReducers
});

export default allReducers