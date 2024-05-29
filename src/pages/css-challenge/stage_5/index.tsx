import { css } from '@emotion/react';

const red = '#FA7373';
const blue = '#7BA2FF';

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
  background: #42a7a1;
  font-family: 'Open Sans', Helvetica, sans-serif;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const card = css`
  position: relative;
  height: 60px;
  width: 100%;
  background: #f1ba64;
  color: #fff;

  .big {
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
  }

  .small {
    position: absolute;
    font-weight: 400;
    font-size: 11px;
  }

  .title {
    top: 12px;
    left: 15px;
  }

  .date {
    top: 30px;
    left: 15px;
  }

  .type {
    top: 14px;
    right: 15px;
  }

  .value {
    top: 28px;
    right: 15px;
  }
`;

const parameter = css`
  text-align: right;
  padding: 10px 0 14px 0;

  span {
    position: relative;
    font-size: 9px;
    color: #606060;
    line-height: 13px;
    padding: 0 10px 0 25px;
  }

  span:before {
    position: absolute;
    left: 6px;
    top: 6px;
    display: block;
    content: '';
    width: 11px;
    height: 3px;
    border-radius: 3px;
  }

  .red:before {
    background: ${red};
  }

  .blue:before {
    background: ${blue};
  }
`;

const lineStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #f2f2f2;
`;

const statistic = css`
  position: relative;
  height: 81px;
  width: 260px;
  margin: 0 auto;

  .line-1 {
    ${lineStyle}
  }

  .line-2 {
    ${lineStyle}
    top: 40px;
  }

  .line-3 {
    ${lineStyle}
    top: inherit;
    bottom: 0;
  }

  .data {
    svg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    polyline {
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
    }

    &.red polyline {
      stroke: ${red};
    }

    &.blue polyline {
      stroke: ${blue};
    }

    .tooltip {
      position: absolute;
      bottom: 13px;
      left: 50%;
      transform: translate3d(-50%, 10px, 0);
      font-weight: 600;
      font-size: 11px;
      line-height: 11px;
      color: #fff;
      padding: 8px 6px;
      border-radius: 3px;
      visibility: hidden;
      opacity: 0;
      transition:
        transform 0.4s ease-out 0s,
        opacity 0.4s ease-out 0s;

      &:after {
        position: absolute;
        display: block;
        content: '';
        height: 6px;
        width: 6px;
        left: 50%;
        margin-left: -3px;
        bottom: -3px;
        transform: rotate(45deg);
      }
    }

    [class^='point-'] {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      cursor: pointer;
      z-index: 10;

      &:hover .tooltip {
        visibility: visible;
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
    }

    &.red {
      [class^='point-'],
      .tooltip,
      .tooltip:after {
        background: ${red};
      }

      .point-1 {
        left: 7px;
        top: 43px;
      }
      .point-2 {
        left: 48px;
        top: 9px;
      }
      .point-3 {
        left: 88px;
        top: 20px;
      }
      .point-4 {
        left: 128px;
        top: 8px;
      }
      .point-5 {
        left: 169px;
        top: 35px;
      }
      .point-6 {
        left: 209px;
        top: 45px;
      }
      .point-7 {
        left: 249px;
        top: 16px;
      }
    }

    &.blue {
      [class^='point-'],
      .tooltip,
      .tooltip:after {
        background: ${blue};
      }

      .point-1 {
        left: 7px;
        top: 58px;
      }
      .point-2 {
        left: 48px;
        top: 47px;
      }
      .point-3 {
        left: 88px;
        top: 62px;
      }
      .point-4 {
        left: 128px;
        top: 52px;
      }
      .point-5 {
        left: 169px;
        top: 58px;
      }
      .point-6 {
        left: 209px;
        top: 71px;
      }
      .point-7 {
        left: 249px;
        top: 61px;
      }
    }
  }
`;

const days = css`
  width: 280px;
  margin: 0 auto;

  .day {
    display: block;
    float: left;
    width: (100% / 7);
    font-size: 9px;
    color: #949494;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const PageDefault = () => {
  return (
    <div css={frame}>
      <div css={card}>
        <div className="header">
          <span className="title big">Weekly report</span>
          <span className="date small">01. Feb - 07. Feb</span>
          <span className="type small">Revenue</span>
          <span className="value big">$ 3621.79</span>
        </div>
        <div className="clearfix"></div>
        <div css={parameter}>
          <span className="red">Views</span>
          <span className="blue">Purchases</span>
        </div>
        <div css={statistic}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="data red">
            <svg>
              <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline>
            </svg>
            <div className="points">
              <div className="point-1">
                <div className="tooltip">458</div>
              </div>
              <div className="point-2">
                <div className="tooltip">812</div>
              </div>
              <div className="point-3">
                <div className="tooltip">746</div>
              </div>
              <div className="point-4">
                <div className="tooltip">877</div>
              </div>
              <div className="point-5">
                <div className="tooltip">517</div>
              </div>
              <div className="point-6">
                <div className="tooltip">434</div>
              </div>
              <div className="point-7">
                <div className="tooltip">458</div>
              </div>
            </div>
          </div>
          <div className="data blue">
            <svg>
              <polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>
            </svg>
            <div className="points">
              <div className="point-1">
                <div className="tooltip">26</div>
              </div>
              <div className="point-2">
                <div className="tooltip">41</div>
              </div>
              <div className="point-3">
                <div className="tooltip">22</div>
              </div>
              <div className="point-4">
                <div className="tooltip">36</div>
              </div>
              <div className="point-5">
                <div className="tooltip">25</div>
              </div>
              <div className="point-6">
                <div className="tooltip">13</div>
              </div>
              <div className="point-7">
                <div className="tooltip">20</div>
              </div>
            </div>
          </div>
        </div>
        <div css={days}>
          <span className="day">Mon</span>
          <span className="day">Tue</span>
          <span className="day">Wed</span>
          <span className="day">Thu</span>
          <span className="day">Fri</span>
          <span className="day">Sat</span>
          <span className="day">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default PageDefault;
