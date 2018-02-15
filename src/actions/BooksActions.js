import * as actionType from './ActionTypes';

export const getBooks = () => {
    return dispatch => {
        dispatch({
            type: actionType.GET_BOOKS_REQUEST
        });
        //todo
        dispatch({
            type: actionType.GET_BOOKS_SUCCESS
        })
    }
};
