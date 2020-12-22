import React,{ useState } from 'react';
import styles from './index.css';

import { List } from 'antd';

function Group(props) {
  const list = props.group;
  // const [list, setList] = useState([
  //   {
  //     "title": "大飞锅",
  //     "description": "测试一波"
  //   },
  //   {
  //     "title": "小飞锅",
  //     "description": "测试一波"
  //   }
  // ]);
  return (
    <div>
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
    </div>
  );
}

export default Group;