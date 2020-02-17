export const ADD_NEWS = 'ADD_NEWS';
export const SET_INDEX = 'SET_INDEX';

export function addNews(data) {
    return {type:ADD_NEWS,payload:data}
}

export function setIndex(data) {
    return {type:SET_INDEX,payload:data}
}