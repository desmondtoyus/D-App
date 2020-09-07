import listing from './reducers/lists/index';
import menu from './reducers/menu/index'
import { combineReducers } from 'redux';

export default combineReducers({
    listings: listing,
    menus: menu,
})
