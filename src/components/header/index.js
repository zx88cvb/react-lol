import { SmileTwoTone} from '@ant-design/icons';
import { DivHeader } from './style.js';
function Header() {
  return (
    <DivHeader>
      <div className="container">
        <div className="header-title">
          <div className="icons-list">
            <SmileTwoTone />
          </div>
          <h2>
            内部LOL开黑分组器
          </h2>
        </div>
      </div>
    </DivHeader>
  );
}

export default Header;