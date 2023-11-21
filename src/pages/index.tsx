import type { NextPage } from 'next';
import Layout from '@/components/common/layout';
import { EachItemProps } from '@/types/types';
import EachItem from '@/components/molecules/EachItem';

const itemList: Array<EachItemProps> = [
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
];
const Home: NextPage = () => {
  return (
    <Layout title="home" hasTabBar>
      <div className="flex flex-col space-y-5 py-10">
        {itemList.map((item) => (
          <EachItem
            itemTitle={item.itemTitle}
            option={item.option}
            price={item.price}
            likeCount={item.likeCount}
            chatCount={item.chatCount}
          />
        ))}
        <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white shadow-xl">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
