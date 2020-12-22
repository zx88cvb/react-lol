import { FooterStyle } from './style.js';
function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="align-items-md-center">
          <div className="flex-md-column">
            <div className="footer-copyright">
            Copyright © 2020 React-lol
          · Powered By React · Theme By Angel
            </div>
          </div>
        </div>
        <div className="footer-links">
          <span>鄂ICP备10086</span>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;