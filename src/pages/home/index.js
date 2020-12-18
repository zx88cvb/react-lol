import React, { useReducer } from 'react';
import styles from './index.css';

import Group from '@/pages/group';

import { getList } from '@/api/player/player';

function Home() {
  return(
    <React.Fragment>
      <div>
        <div>
          
        </div>
        <div className={styles.group_box}>
          <Group></Group>
          <Group></Group>
        </div>
      </div>
    </React.Fragment>
  );
}
export default React.memo(Home);