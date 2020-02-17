import {ADD_NEWS,SET_INDEX} from './../actions';
const initialState = {
    loader: false,
    news: [],
    index: ''
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return ({...state,news:action.payload, loader:true})
        case SET_INDEX:
            return ({...state,index:action.payload})
      default:
        return state
    }
  }
  export default news