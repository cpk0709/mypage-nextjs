import { css, keyframes } from '@emotion/react';

const jumpJump1 = keyframes` 
	0%, 70% {
		box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.2);
		transform: scale(0);
	}

	100% {
		box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
		transform: scale(1);
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
  background: #e56262;
  color: #fff;
`;

const center = css`
  position: absolute;
  width: 220px;
  height: 220px;
  top: 90px;
  left: 90px;
  .dot-1 {
    position: absolute;
    z-index: 3;
    width: 30px;
    height: 30px;
    top: 95px;
    left: 95px;
    background: #fff;
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${jumpJump1} 2s infinite alternate;
  }
`;

const PageDefault = () => {
  return (
    <div css={frame}>
      <div css={center}>
        <div className="dot-1"></div>
        <div className="dot-2"></div>
        <div className="dot-3"></div>
      </div>
    </div>
  );
};

export default PageDefault;
