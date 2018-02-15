import * as actionType from './ActionTypes';

export const getBookshelves = () => {
    return dispatch => {
        dispatch({
            type: actionType.GET_BOOKSHELVES_REQUEST
        });
        //todo
        dispatch({
            type: actionType.GET_BOOKSHELVES_SUCCESS
        })
    }
};
