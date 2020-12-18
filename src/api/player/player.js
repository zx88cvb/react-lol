import axios from '@/api/config.js';

/* 查询玩家集合列表 */
export function getList (params) {
  const url = '/api/players.json'

  const data = params
  return axios.get(url, {
    params: data
  });
}