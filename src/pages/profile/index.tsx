import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import CartIcon from '@/components/atom/icons/CartIcon';
import ShoppingBagIcon from '@/components/atom/icons/ShoppingBagIcon';
import LikeIcon from '@/components/atom/icons/LikeIcon';
import BtnTextCol from '@/components/molecules/BtnTextCol';
import StarIcon from '@/components/atom/icons/StarIcon';

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
          <BtnTextCol btnText='판매내역'>
            <CartIcon/>
          </BtnTextCol>
          <BtnTextCol btnText='구매내역'>
            <ShoppingBagIcon/>
          </BtnTextCol>
          <BtnTextCol btnText='관심목록'>
          <LikeIcon size={6}/>
          </BtnTextCol>
        </div>
        <div className="mt-12">
          <div className="flex space-x-4 items-center">
            <div className="w-12 h-12 rounded-full bg-slate-400" />
            <div>
              <h4 className="text-sm font-bold text-gray-800">니꼬</h4>
              <div className="flex items-center">
                <StarIcon textColorClass='text-yellow-400'/>
                <StarIcon textColorClass='text-yellow-400'/>
                <StarIcon textColorClass='text-yellow-400'/>
                <StarIcon textColorClass='text-yellow-400'/>
                <StarIcon/>
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            <p>
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I&apos;m in a transitional
              period so I don&apos;t wanna kill you, I wanna help you. But I
              can&apos;t give you this case, it don&apos;t belong to me.
              Besides, I&apos;ve already been through too much shit this morning
              over this case to hand it over to your dumb ass.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
