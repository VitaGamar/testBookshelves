import * as ENTITY_NAME from './entityNames'

const HTTP_METHOD = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'PATCH'
};

const createCRUDEvent = (entityName, httpMethod) => `@entities/${httpMethod}-${entityName}`;

export const GET_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const CREATE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.POST);
export const UPDATE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.PUT);
export const DELETE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.DELETE);


export const GET_BOOK_SHELVE = createCRUDEvent(ENTITY_NAME.BOOK_SHELVE, HTTP_METHOD.GET);
export const CREATE_BOOK_SHELVE = createCRUDEvent(ENTITY_NAME.BOOK_SHELVE, HTTP_METHOD.POST);
export const UPDATE_BOOK_SHELVE = createCRUDEvent(ENTITY_NAME.BOOK_SHELVE, HTTP_METHOD.PUT);
export const DELETE_BOOK_SHELVE = createCRUDEvent(ENTITY_NAME.BOOK_SHELVE, HTTP_METHOD.DELETE);