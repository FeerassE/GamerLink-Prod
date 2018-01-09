import { FETCH_USERS } from '../actions';

import _ from 'lodash';


const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})

export default function(state = {} , action) {
    switch(action.type) {
        case FETCH_USERS:
            const userObject = arrayToObject(action.payload.data, 'displayName')
        return userObject

        default:
            return state;
    }
}