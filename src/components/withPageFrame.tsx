import { type ComponentType, type FC } from 'react';

interface FrameProps {
  isPrepareing?: boolean;
  hasGnb?: boolean;
  hasBottomSection?: boolean;
  hasFooter?: boolean;
}

const defaultFrameProps: FrameProps = {
  isPrepareing: false,
  hasGnb: true,
  hasBottomSection: true,
  hasFooter: true,
};

const withPageFrame = <P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P>,
  frameProps: FrameProps = defaultFrameProps,
) => {
  const WithPageFrame: FC<P> = (props) => {
    const { isPrepareing, hasGnb, hasBottomSection, hasFooter } = {
      ...defaultFrameProps,
      ...frameProps,
    };

    if (isPrepareing) {
      return <>준비중입니다.</>;
    }

    return (
      <section>
        <WrappedComponent {...props} />
      </section>
    );
  };

  WithPageFrame.displayName = `WithPageFrame(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithPageFrame;
};

export default withPageFrame;
