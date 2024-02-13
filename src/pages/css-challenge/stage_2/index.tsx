import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

const animateLine1 = keyframes`
0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 22px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }
`;

const animateLine2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const animateLine3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -22px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }
`;

const animateLine1Rev = keyframes`
0% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 22px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

const animateLine2Rev = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const animateLine3Rev = keyframes`
  0% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -22px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

const container = css`
  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    background: #3faf82;
    color: #fff;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const menuBody = css`
  width: 80px;
  height: ${3 * 8 + 2 * 14}px; /* Calculated based on variables */
  cursor: pointer;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .line-1,
  .line-2,
  .line-3 {
    height: 8px; /* $menu-icon-line-height */
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    transition: background-color 0.2s ease-in-out;
  }

  &.none {
    .line-1 {
      animation: ${animateLine1Rev} 0.7s ease-in-out;
    }
    .line-2 {
      /* margin: $menu-icon-line-space 0; */
      animation: ${animateLine2Rev} 0.7s ease-in-out;
    }
    .line-3 {
      animation: ${animateLine3Rev} 0.7s ease-in-out;
    }
  }

  &.active {
    .line-1 {
      animation: ${animateLine1} 0.7s forwards;
    }
    .line-2 {
      /* margin: $menu-icon-line-space 0; */
      animation: ${animateLine2} 0.7s forwards;
    }
    .line-3 {
      animation: ${animateLine3} 0.7s forwards;
    }
  }
`;

const PageDefault = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <section css={container}>
      <div className="frame">
        <div className="center">
          <div
            className={`menu-icon ${isActive ? 'active' : 'none'}`}
            css={menuBody}
            onClick={toggleMenu}
          >
            <div className={`line-1 ${!isActive ? 'no-animation' : ''}`}></div>
            <div className={`line-2 ${!isActive ? 'no-animation' : ''}`}></div>
            <div className={`line-3 ${!isActive ? 'no-animation' : ''}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageDefault;
