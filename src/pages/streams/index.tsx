import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import VideoIcon from '@/components/atom/icons/VideoIcon';
import FixedButton from '@/components/atom/FixedButton';

const Live: NextPage = () => {
  return (
    <Layout title="Stream" hasTabBar>
      <div className="py-10 px-4 divide-y-2 space-y-4">
        {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <div className="pt-4" key={index}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className=" text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <FixedButton>
          <VideoIcon/>
        </FixedButton>
      </div>
    </Layout>
  );
};

export default Live;
