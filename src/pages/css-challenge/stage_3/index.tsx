import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

const skyTurnsBlack = keyframes`
  0% {
    background: #272C34;
  }
	
	30% {
		background: #7DDFFC;
	}
	
	70% {
		background: #7DDFFC;
	}

  100% {
    background: #272C34;
  }
`;

const frame = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #272c34;
  color: #fff;
`;

const center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const circle = css`
  position: relative;
  overflow: hidden;
  clip-path: circle(90px at 90px 90px);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  .sky {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 124px;
    background: #7ddffc;
    animation: ${skyTurnsBlack} 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  }
`;

const PageDefault = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div css={frame}>
      <div css={center}>
        <div css={circle}>
          <div className="sky"></div>
          <div className="sun"></div>
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="shadow"></div>
          <div className="ground"></div>
        </div>
      </div>
    </div>
  );
};

export default PageDefault;
