import { SET_USER } from '../actions';

import _ from 'lodash';

const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})

export default function(state = {} , action) {
    switch(action.type) {
        case SET_USER:
            const currentUser = action.payload.data[0]
        return currentUser

        default:
            return state;
    }
}