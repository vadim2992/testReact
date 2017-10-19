import * as constant from '../constants/Constants';

/**
 * Setting up all default data and params for this reducer
 */
const initialState = {
    users: false,
    selectedUser: false
};

/**
 * @Reducer model
 * main reducer which storing all data, params and revolve it in case of changing state
 */
export default function model(state = initialState, action) {
    switch (action.type) {

        case constant.GET_USERS_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload
            };

        case constant.SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            };

        default:
            return state;
    }
}