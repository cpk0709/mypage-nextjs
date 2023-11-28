import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import CartIcon from '@/components/atom/icons/CartIcon';
import ShoppingBagIcon from '@/components/atom/icons/ShoppingBagIcon';
import LikeIcon from '@/components/atom/icons/LikeIcon';
import BtnTextCol from '@/components/molecules/BtnTextCol';
import { ReviewForUserProps } from '@/types/types';
import ReviewForUser from '@/components/organisms/ReviewForUser';

const reviewList: ReviewForUserProps[] = [
  {
    id: 1,
    userName: '니꼬',
    score: 2,
    desc: 'Normally, both your asses would be dead as fucking fried chicken,but you happen to pull this shit while I&apos;m in a transitional period so I don&apos;t wanna kill you, I wanna help you. But I can&apos;t give you this case, it don&apos;t belong to me. Besides, I&apos;ve already been through too much shit this morning over this case to hand it over to your dumb ass.',
  },
];

const Profile: NextPage = () => {
  return (
    <Layout title="Profile" hasTabBar>
      <div className="py-10 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-slate-500 rounded-full" />
          <div className="flex flex-col">
            <span className=" font-medium text-gray-900">Steve Jebs</span>
            <span className="text-sm text-gray-500">Edit profile &rarr;</span>
          </div>
        </div>
        <div className="mt-10 flex justify-around">
          <BtnTextCol btnText="판매내역">
            <CartIcon />
          </BtnTextCol>
          <BtnTextCol btnText="구매내역">
            <ShoppingBagIcon />
          </BtnTextCol>
          <BtnTextCol btnText="관심목록">
            <LikeIcon size={6} />
          </BtnTextCol>
        </div>
        {reviewList.map((item) => (
          <ReviewForUser
            key={item.id}
            id={item.id}
            userName={item.userName}
            score={item.score}
            desc={item.desc}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Profile;
