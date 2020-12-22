import React from 'react';
// import styles from './index.css';

import { List } from 'antd';

function Group(props) {
  const {group, header} = props;
  return (
    <List
      header={header}
      itemLayout="horizontal"
      dataSource={group}
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