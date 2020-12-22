import React, { useEffect, useRef, useContext } from 'react';

import Group from '@/pages/group';

import { Row, Col, List, Typography, Input, Button } from 'antd';
import Context from '@/context';
import { getPlayerList, addPlayer, removePlayer, groupPlayer } from '@/reducers/player/action';

import { DivHome } from './style';

function Home() {
  const {state, dispatch} = useContext(Context);
  useEffect(()=> {
    getPlayerList(dispatch)
  },[dispatch]);

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
      <List
        header={<div>Player</div>}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleRemoveClick(item.id)}>
            <Typography.Text mark>[player{index + 1}]</Typography.Text> {item.name}
          </List.Item>
        )}
      />
      // list.map(item => (
        
      //   <li key={item.id}
      //     onClick={() => handleRemoveClick(item.id)}>
      //     {item.name}
      //   </li>
      // ))
    );
  }
  return(
    <DivHome>
      <div className="container">
        <Row>
          <Col span={24}>
            <Input placeholder="请输入玩家名称"
              ref={inputRef}/>
            <Button type="primary"
              style={{ marginLeft: 8 }}
              onClick={handleAddClick}>
              确定
            </Button>
            {
              candidateList(players)
            }
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Group group={groupA}></Group>
          </Col>
          <Col span={12}>
            <Group group={groupB}></Group>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary"
              style={{ marginLeft: 8 }}
              onClick={handleGroupClick}>
              开始分组
            </Button>
          </Col>
        </Row>
      </div>
    </DivHome>
  );
}
export default React.memo(Home);