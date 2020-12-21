import { GET_PLAYER_LIST, ADD_PLAYER, DELETE_PLAYER, GROUP_PLAYER } from './constant';
import { ERR_OK } from '@/api/constants';
import { getList } from '@/api/player/player';

export const getPlayerList = (dispatch) => {
  getList({}).then((res) => {
    if(ERR_OK === res.code) {
      const players = res.data;
      dispatch({
        type: GET_PLAYER_LIST,
        players
      })
    }
  }).catch((response) => {
    console.log(response);
  });
}

export const addPlayer = (value) => {
  return ({
    type: ADD_PLAYER,
    value
  });
}

export const removePlayer = (id) => {
  return ({
    type: DELETE_PLAYER,
    id
  });
}

export const groupPlayer = () => {
  return ({
    type: GROUP_PLAYER
  });
}