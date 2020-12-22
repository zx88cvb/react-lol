import { GET_PLAYER_LIST, ADD_PLAYER, DELETE_PLAYER, GROUP_PLAYER } from './constant';

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case GET_PLAYER_LIST:
      return {...state, players: action.players};
    case ADD_PLAYER:
      let item = {
        id: new Date().getTime(),
        name: action.value,
        description: "测试"
      }
      const players = [...state.players, item];
      return {...state, players: players};
    case DELETE_PLAYER:
      let arr = state.players;
      let newArr = arr.filter(e => e.id !== action.id);
      return {...state, players: newArr};
    case GROUP_PLAYER:
      if(!state.players) {
        return state;
      }
      let oldArr = state.players;
      oldArr.sort(() => Math.random()>0.5?-1:1);
      let groupA = [];
      let groupB = [];
      oldArr.forEach((element, index) => {
        if (index + 1 <= oldArr.length / 2) {
          groupA.push(element);
        } else {
          groupB.push(element);
        }
      });
      return {...state, groupA, groupB};
    default:
      return state;
  }
}

export default reducer;