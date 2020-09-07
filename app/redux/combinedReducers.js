import listing from './reducers/lists/index';
import menu from './reducers/menu/index';
import mail from './reducers/mail/index'
import { combineReducers } from 'redux';

export default combineReducers({
    listings: listing,
    menus: menu,
    mails: mail
})
