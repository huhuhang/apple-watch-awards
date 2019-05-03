import React from 'react';
import Logo from '../images/logo.png';

const Header = ({ src }) => {
  return (
    <header id="header">
      <div className="inner">
        <div className="fit">
          <a href="index.html" className="logo">
            <span className="symbol">
              <img alt="website logo" src={Logo} />
            </span>
            <span className="title">Apple Watch Awards Gallery</span>
          </a>
        </div>
        <div className="fit">
          <p>
            你可以使用
            <a href="https://support.apple.com/zh-cn/HT205406">Apple Watch</a>
            赢取个人记录、殊荣和重要的里程碑等奖章。
          </p>
        </div>
        <hr />
      </div>
    </header>
  );
};
export default Header;
