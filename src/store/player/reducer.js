import { GET_PLAYER } from './constant';

const initialState = {
  plays: []
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PLAYER:
      return action.plays
    default:
      return state  
  }
}

export default reducer;