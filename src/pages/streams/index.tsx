import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import VideoIcon from '@/components/atom/icons/VideoIcon';
import FloatingButton from '@/components/atom/FloatingButton';
import { useRouter } from 'next/router';
import StreamListItem from '@/components/organisms/StreamListItem';

const Live: NextPage = () => {
  const route = useRouter();

  const moveToStreamCreate = () => {
    void route.push('/streams/create');
  };

  const moveToStreamDetail = () => {
    // need to edit
    void route.push('/streams/1');
  };

  return (
    <Layout title="Stream" hasTabBar>
      <div className="py-10 px-4 divide-y-2 space-y-4">
        {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <StreamListItem onClick={moveToStreamDetail} key={index} />
        ))}
        <FloatingButton onClick={moveToStreamCreate}>
          <VideoIcon />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
