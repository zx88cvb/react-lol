import React from 'react';
// import styles from './index.css';

import { List } from 'antd';

function Group(props) {
  const list = props.group;
  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

export default Group;