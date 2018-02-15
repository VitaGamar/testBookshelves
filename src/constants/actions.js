import * as ENTITY_NAME from './entityNames'

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const LOADING = 'LOADING';

const HTTP_METHOD = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'PATCH'
};

const createCRUDEvent = (entityName, httpMethod) => `@entities/${httpMethod}-${entityName}`;

export const GET_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const DELETE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const GET_ALL_BOOKS = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const GET_ALL_BOOKS = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const GET_ALL_BOOKS = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);