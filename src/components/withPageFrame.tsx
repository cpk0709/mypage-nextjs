import { type ComponentType, type FC } from 'react';
import Layout from '@/components/common/layout';

interface FrameProps {
  isPrepareing?: boolean;
  hasTabBar?: boolean;
  title: string;
  hasBottomSection?: boolean;
  hasFooter?: boolean;
}

const defaultFrameProps: FrameProps = {
  isPrepareing: false,
  hasTabBar: true,
  title: '',
  hasBottomSection: true,
  hasFooter: true,
};

const withPageFrame = <P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P>,
  frameProps: FrameProps = defaultFrameProps,
) => {
  const WithPageFrame: FC<P> = (props) => {
    const { isPrepareing, hasTabBar, title, hasBottomSection, hasFooter } = {
      ...defaultFrameProps,
      ...frameProps,
    };

    if (isPrepareing) {
      return <>준비중입니다.</>;
    }

    return (
      <Layout title={title} hasTabBar={hasTabBar}>
        <WrappedComponent {...props} />
      </Layout>
    );
  };

  WithPageFrame.displayName = `WithPageFrame(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithPageFrame;
};

export default withPageFrame;
