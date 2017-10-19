import * as constants from '../constants/Constants';
import * as usersData from '../data/usersData.json';

/**
 *Action for get data about users
 */
export function getData() {
    return (dispatch) => {
        dispatch({
            type: constants.GET_USERS_DATA_SUCCESS,
            payload: usersData.users
        });
    };
}

/**
 *Action for select user
 * @param selectedUser - selected user
 */
export function selectUser(selectedUser) {
    return (dispatch) => {
        dispatch({
            type: constants.SELECT_USER,
            payload: selectedUser
        });
    };
}


