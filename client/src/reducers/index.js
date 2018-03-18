import {combineReducers} from 'redux';
import AsideReducers from './aside';
import PostsReducers from './posts';
import ServicesReducers from './services';

const allReducers = combineReducers({
    aside : AsideReducers,
    post : PostsReducers,
    services : ServicesReducers
});

export default allReducers