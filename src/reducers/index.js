import player from '@/reducers/player/reducer';

const reducer = (state, action)=>{
  return {
    player: player(state, action)
  }
}
export default reducer;