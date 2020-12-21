import { GET_PLAYER_LIST, ADD_PLAYER, DELETE_PLAYER, GROUP_PLAYER } from './constant';

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case GET_PLAYER_LIST:
      return {players: action.players};
    case ADD_PLAYER:
      let item = {
        id: new Date().getTime(),
        name: action.value,
        description: "测试"
      }
      const players = [...state.player.players, item];
      console.log('players', players);
      return {players};
    case DELETE_PLAYER:
      let arr = state.player.players;
      let newArr = arr.filter(e => e.id !== action.id);
      return {players: newArr};
    case GROUP_PLAYER:
      if(!state.player.players) {
        return state;
      }
      let oldArr = state.player.players;
      oldArr.sort(() => Math.random()>0.5?-1:1);
      let groupA = [];
      let groupB = [];
      oldArr.map((element, index) => {
        if (index <= oldArr.length) {
          groupA.push(element);
        } else {
          groupB.push(element);
        }
      });
      console.log(state);
      return {groupA, groupB};
    default:
      return state;
  }
}

export default reducer;