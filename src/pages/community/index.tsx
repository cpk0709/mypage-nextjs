import type { NextPage } from 'next';
import Button from '@/components/atom/Button';
import Layout from '@/components/common/layout';
import { CommunityListItemProps } from '@/types/types';
import CommunityListItem from '@/components/molecules/CommunityListItem';

const CommunityList:Array<CommunityListItemProps> = [
  {
    id:1,
    tag:'동네질문',
    title:'흔한 식당이 있나요?',
    userName:'니꼬',
    uploadTime:'2시간 전',
    interestingCount:1,
    answerCount:2
  },
  {
    id:2,
    tag:'동네질문',
    title:'the best mandu restaurant?',
    userName:'니꼬',
    uploadTime:'12시간 전',
    interestingCount:11,
    answerCount:12
  },
  {
    id:3,
    tag:'동네질문',
    title:'the best kimchi restaurant?',
    userName:'니꼬',
    uploadTime:'3시간 전',
    interestingCount:7,
    answerCount:10
  },
  {
    id:4,
    tag:'동네질문',
    title:'흔한 카페 있나요?',
    userName:'니꼬',
    uploadTime:'1시간 전',
    interestingCount:0,
    answerCount:1
  },
  {
    id:5,
    tag:'동네질문',
    title:'맛집 추천?',
    userName:'니꼬',
    uploadTime:'4시간 전',
    interestingCount:1,
    answerCount:2
  },
]

const Community: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="py-16 px-4 space-y-8">
        {CommunityList.map((item) => (
          <CommunityListItem
            key={item.id}
            id={item.id}
            tag={item.tag}
            title={item.title}
            userName={item.userName}
            uploadTime={item.uploadTime}
            interestingCount={item.interestingCount}
            answerCount={item.answerCount}
          />
        ))}

        <Button>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </Button>
      </div>
    </Layout>
  );
};

export default Community;
