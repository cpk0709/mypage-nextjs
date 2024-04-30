import { css, keyframes } from '@emotion/react';

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

const sunGoesDown = keyframes`
  0% {
		background: #F57209;
    transform: rotate(-70deg);
  }
	
	30% {
		background: #FFEF00;
		transform: rotate(-28deg);
	}
	
	50% {
		background: #FFEF00;
	}

  100% {
		background: #F57209;
    transform: rotate(70deg);
  }
`;

const fadingSand = keyframes`
  0% {
    background: #272C34;
  }
	
	30% {
		background: #F0DE75;
	}
	
	70% {
		background: #F0DE75;
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
  /* clip-path: circle(90px at 90px 90px); */
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
    animation: ${skyTurnsBlack} 4s infinite;
  }
  .sun {
    position: absolute;
    z-index: 2;
    top: 7px;
    left: 73px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #ffef00;
    transform-origin: 50% 400%;
    animation: ${sunGoesDown} 4s cubic-bezier(0.37, 0.67, 0.35, 1) infinite;
  }
  .ground {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: #f0de75;
    animation: ${fadingSand} 4s infinite;
  }
`;

const PageDefault = () => {
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
