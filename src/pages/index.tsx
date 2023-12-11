import type { NextPage } from 'next';
import Layout from '@/components/common/layout';
import { EachItemProps } from '@/types/types';
import EachItem from '@/components/organisms/EachItem';
import FloatingButton from '@/components/atom/FloatingButton';
import PlusIcon from '@/components/atom/icons/PlusIcon';
import { useRouter } from 'next/router';
import '@/libs/server/client';
import Forms from '@/components/organisms/forms';

const itemList: EachItemProps[] = [
  {
    id: 1,
    itemTitle: 'New iPhone 14',
    option: 'Black',
    price: 95,
    likeCount: 12,
    chatCount: 7,
  },
  {
    id: 2,
    itemTitle: 'iPhone 11 SE',
    option: 'Pink',
    price: 65,
    likeCount: 5,
    chatCount: 8,
  },
  {
    id: 3,
    itemTitle: 'Galaxy S 21',
    option: 'White',
    price: 85,
    likeCount: 13,
    chatCount: 4,
  },
  {
    id: 4,
    itemTitle: 'Macbook Air',
    option: 'Silver',
    price: 115,
    likeCount: 10,
    chatCount: 3,
  },
  {
    id: 5,
    itemTitle: 'iPad Pro 2',
    option: 'Silver',
    price: 105,
    likeCount: 2,
    chatCount: 3,
  },
  {
    id: 6,
    itemTitle: '4인용 식탁',
    option: '다크 우드',
    price: 200,
    likeCount: 2,
    chatCount: 3,
  },
  {
    id: 7,
    itemTitle: '게이밍 의자',
    option: '화이트 색상',
    price: 70,
    likeCount: 2,
    chatCount: 3,
  },
  {
    id: 8,
    itemTitle: '게이밍 의자',
    option: '블랙 색상',
    price: 70,
    likeCount: 2,
    chatCount: 3,
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  const moveToUpload = () => {
    void router.push('/item/upload');
  };

  return (
    <Layout title="home" hasTabBar>
      <div className="flex flex-col space-y-5 py-10">
        {itemList.map((item) => (
          <button
            key={item.id}
            onClick={() => void router.push(`/item/${item.id}`)}
          >
            <EachItem
              id={item.id}
              itemTitle={item.itemTitle}
              option={item.option}
              price={item.price}
              likeCount={item.likeCount}
              chatCount={item.chatCount}
            />
          </button>
        ))}
        <Forms />
        <FloatingButton onClick={moveToUpload}>
          <PlusIcon />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
