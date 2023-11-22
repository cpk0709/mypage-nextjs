import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import VideoIcon from '@/components/atom/icons/VideoIcon';
import FixedButton from '@/components/atom/FixedButton';
import { useRouter } from 'next/router';
import StreamListItem from '@/components/organisms/StreamListItem';

const Live: NextPage = () => {
  const route = useRouter();
  const moveToStreamCreate = () => {
    route.push('/streams/create');
  };

  return (
    <Layout title="Stream" hasTabBar>
      <div className="py-10 px-4 divide-y-2 space-y-4">
        {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <StreamListItem key={index} />
        ))}
        <FixedButton onClick={moveToStreamCreate}>
          <VideoIcon />
        </FixedButton>
      </div>
    </Layout>
  );
};

export default Live;
