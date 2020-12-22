import player from '@/reducers/player/reducer';

const reducer = (state, action)=>{
  return {
    player: player(state.player, action)
  }
}
export default reducer;