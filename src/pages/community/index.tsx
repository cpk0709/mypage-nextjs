import type { NextPage } from 'next';
import FloatingButton from '@/components/atom/FloatingButton';
import Layout from '@/components/common/layout';
import { CommunityListItemProps } from '@/types/types';
import CommunityListItem from '@/components/organisms/CommunityListItem';
import WriteIcon from '@/components/atom/icons/WriteIcon';
import { useRouter } from 'next/router';

const CommunityList: Array<CommunityListItemProps> = [
  {
    id: 1,
    tag: '동네질문',
    title: '흔한 식당이 있나요?',
    userName: '니꼬',
    uploadTime: '2시간 전',
    interestingCount: 1,
    answerCount: 2,
  },
  {
    id: 2,
    tag: '동네질문',
    title: 'the best mandu restaurant?',
    userName: '니꼬',
    uploadTime: '12시간 전',
    interestingCount: 11,
    answerCount: 12,
  },
  {
    id: 3,
    tag: '동네질문',
    title: 'the best kimchi restaurant?',
    userName: '니꼬',
    uploadTime: '3시간 전',
    interestingCount: 7,
    answerCount: 10,
  },
  {
    id: 4,
    tag: '동네질문',
    title: '흔한 카페 있나요?',
    userName: '니꼬',
    uploadTime: '1시간 전',
    interestingCount: 0,
    answerCount: 1,
  },
  {
    id: 5,
    tag: '동네질문',
    title: '맛집 추천?',
    userName: '니꼬',
    uploadTime: '4시간 전',
    interestingCount: 1,
    answerCount: 2,
  },
];

const Community: NextPage = () => {
  const route = useRouter();
  const moveToWrite = () => {
    route.push('/community/write');
  };
  return (
    <Layout title="Community" hasTabBar>
      <div className="py-16 px-4 space-y-8">
        {CommunityList.map((item) => (
          <button
            key={item.id}
            onClick={() => route.push(`/community/${item.id}`)}
            className="block w-full"
          >
            <CommunityListItem
              id={item.id}
              tag={item.tag}
              title={item.title}
              userName={item.userName}
              uploadTime={item.uploadTime}
              interestingCount={item.interestingCount}
              answerCount={item.answerCount}
            />
          </button>
        ))}

        <FloatingButton onClick={moveToWrite}>
          <WriteIcon />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
