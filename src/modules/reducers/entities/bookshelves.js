import * as actionType from '../../../constants/actions';
import initialState from '../../stores/initialState'
import { getBookshelves } from "../../selectors/bookshelves";

const bookshelvesReducer = (state = getBookshelves(initialState), action) => {
    return state;
};

export default bookshelvesReducer;
