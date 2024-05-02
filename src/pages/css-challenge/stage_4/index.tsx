import { css } from '@emotion/react';

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
