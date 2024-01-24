import { type ComponentType, type FC } from 'react';
import Layout from '@/components/common/layout';

interface FrameProps {
  isPrepareing?: boolean;
  title: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
}

const defaultFrameProps: FrameProps = {
  isPrepareing: false,
  title: '',
  hasTabBar: true,
  canGoBack: false,
};

const withPageFrame = <P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P>,
  frameProps: FrameProps = defaultFrameProps,
) => {
  const WithPageFrame: FC<P> = (props) => {
    const { isPrepareing, hasTabBar, title, canGoBack } = {
      ...defaultFrameProps,
      ...frameProps,
    };

    if (isPrepareing) {
      return <>준비중입니다.</>;
    }

    return (
      <Layout title={title} hasTabBar={hasTabBar} canGoBack={canGoBack}>
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
