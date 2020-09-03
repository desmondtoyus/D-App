import listing from './reducers/listing';
import menu from './reducers/menu'
import { combineReducers } from 'redux';

export default combineReducers({
    listings: listing,
    menus: menu,
})
