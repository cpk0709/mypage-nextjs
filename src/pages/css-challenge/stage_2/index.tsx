/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

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

  // Animation Keyframes
  ${keyframes`
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, 22px, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, 22px, 0) rotate(45deg);
    }
  `} animate-line-1
  // Define other keyframes following the same pattern

  .menu-icon {
    width: 80px;
    height: ${3 * 8 + 2 * 14}px; /* Calculated based on variables */
    cursor: pointer;
    z-index: 50;

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
    &:hover {
      .line-1,
      .line-2,
      .line-3 {
        background-color: #fff;
      }
    }
    &.active {
      .line-1 {
        /* Use the appropriate animation */
      }
      .line-2 {
        /* Use the appropriate animation */
      }
      .line-3 {
        /* Use the appropriate animation */
      }
    }
  }

  .no-animation {
    animation: none !important;
  }

  // You need to define keyframes for animations inside the css template literal
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
            className={`menu-icon ${isActive ? 'active' : ''}`}
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
