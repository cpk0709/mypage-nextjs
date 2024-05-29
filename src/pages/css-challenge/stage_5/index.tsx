import { css } from '@emotion/react';

const red = '#FA7373';
const blue = '#7BA2FF';

const container = css`
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

const PageDefault = () => {
  return (
    <div className="frame" css={container}>
      <div className="card">
        <div className="header">
          <span className="title big">Weekly report</span>
          <span className="date small">01. Feb - 07. Feb</span>
          <span className="type small">Revenue</span>
          <span className="value big">$ 3621.79</span>
        </div>
        <div className="clearfix"></div>
        <div className="parameter">
          <span className="red">Views</span>
          <span className="blue">Purchases</span>
        </div>
        <div className="statistic">
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
        <div className="days">
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
