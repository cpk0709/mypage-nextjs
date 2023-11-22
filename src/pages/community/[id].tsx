import type { NextPage } from 'next';
import SquareStretchButton from '@/components/atom/SquareStretchButton';
import Layout from '@/components/common/layout';
import InterestingIcon from '@/components/atom/icons/InterestingIcon';
import ChatIcon from '@/components/atom/icons/ChatIcon';

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div>
        <span className="inline-flex my-3 ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          동네질문
        </span>
        <div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2 px-4 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <span className="flex space-x-2 items-center text-sm">
              <InterestingIcon />
              <span>궁금해요 1</span>
            </span>
            <span className="flex space-x-2 items-center text-sm">
              <ChatIcon />
              <span>답변 1</span>
            </span>
          </div>
        </div>
        <div className="px-4 my-5 space-y-5">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            <div>
              <span className="text-sm block font-medium text-gray-700">
                Steve Jebs
              </span>
              <span className="text-xs text-gray-500 block ">2시간 전</span>
              <p className="text-gray-700 mt-2">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <textarea
            className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
            rows={4}
            placeholder="Answer this question!"
          />
          <SquareStretchButton
            btnText="Reply"
            buttonStyle={['mt-2', 'text-sm']}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
