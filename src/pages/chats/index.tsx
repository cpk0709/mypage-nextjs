import Layout from '@/components/common/layout';
import { NextPage } from 'next';
import ChatListItem from '@/components/organisms/ChatListItem';
import { useRouter } from 'next/router';

const Chats: NextPage = () => {
  const route = useRouter();

  const moveToChat = () => {
    // need to edit
    void route.push('/chats/1');
  };

  return (
    <Layout title="Chat" hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <ChatListItem onClick={moveToChat} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
