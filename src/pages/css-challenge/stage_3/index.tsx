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

const pyramideShading = keyframes`
  0% {
    background: #272C34;
  }
  
  30% {
    background: #F4F4F4;
  }
  
  60% {
    background: #DDDADA;
  }

  100% {
    background: #272C34;
  }
`;

const shadowOnTheFloor = keyframes`
0% {
		transform: scaleY(0);
	  clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
  }
	
	30% {
		transform: scaleY(1);
	  clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
	}
	
	55% {
		transform: scaleY(.4);
	}

	75% {
		transform: scaleY(1);
	}

  100% {
		transform: scaleY(0);
	  clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
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
    animation: ${skyTurnsBlack} 4s cubic-bezier(0.37, 0.67, 0.35, 1) infinite;
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
  .side-left {
    position: absolute;
    top: 67px;
    left: 35px;
    height: 57px;
    width: 116px;
    background: #f4f4f4;
    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
    animation: ${pyramideShading} 4s cubic-bezier(0.01, 0.57, 0.45, 0.3)
      infinite;
  }
  .side-right {
    position: absolute;
    top: 67px;
    left: 93px;
    height: 57px;
    width: 58px;
    background: #dddada;
    clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
    animation: ${pyramideShading} 4s cubic-bezier(0.37, 0.7, 0.25, 0.1) infinite
      reverse;
  }
  .shadow {
    position: absolute;
    z-index: 2;
    top: 124px;
    left: -80px;
    height: 30px;
    width: 360px;
    background: rgba(0, 0, 0, 0.2);
    transform-origin: 50% 0%;
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
    animation: ${shadowOnTheFloor} 4s cubic-bezier(0.37, 0.67, 0.35, 1) infinite;
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
