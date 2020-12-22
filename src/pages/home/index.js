import React, { useEffect, useRef, useContext } from 'react';
import styles from './index.css';

import Group from '@/pages/group';

import { Input, Button } from 'antd';
import Context from '@/context';
import { getPlayerList, addPlayer, removePlayer, groupPlayer } from '@/reducers/player/action';

function Home() {
  const {state, dispatch} = useContext(Context);
  useEffect(()=> {
    getPlayerList(dispatch)
  },[dispatch]);

  console.log(state);
  // 玩家list
  const players = state.player.players;
  const groupA = state.player.groupA;
  const groupB = state.player.groupB;

  // 玩家输入框
  const inputRef = useRef(null);

  // 添加点击事件
  const handleAddClick = () => {
    let value = inputRef.current.state.value;
    if(value) {
      dispatch(addPlayer(value));
    }
    inputRef.current.state.value = '';
  }

  // 点击删除事件
  const handleRemoveClick = (id) => {
    dispatch(removePlayer(id));
  }

  // 分组点击事件
  const handleGroupClick = () => {
    dispatch(groupPlayer());
  }

  // 子组件
  const candidateList = (list) => {
    return (
      list.map(item => (
        <li key={item.id}
          onClick={() => handleRemoveClick(item.id)}>
          {item.name}
        </li>
      ))
    );
  }
  return(
    <React.Fragment>
      <div>
        <div>
          <Input placeholder="请输入玩家名称"
            ref={inputRef}/>
          <Button type="primary"
            style={{ marginLeft: 8 }}
            onClick={handleAddClick}>
            确定
          </Button>
          <ul>
            {
              candidateList(players)
            }
          </ul>
        </div>
        <div className={styles.group_box}>
          <Group group={groupA}></Group>
          <Group group={groupB}></Group>
        </div>
        <div>
          <Button type="primary"
            style={{ marginLeft: 8 }}
            onClick={handleGroupClick}>
            开始分组
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default React.memo(Home);