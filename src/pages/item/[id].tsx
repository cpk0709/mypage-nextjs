import type { NextPage } from 'next';
import Layout from '@/components/common/layout';
import UserProfileRoute from '@/components/molecules/UserProfileRoute';
import LikeIcon from '@/components/atom/icons/LikeIcon';
import SquareStretchButton from '@/components/atom/SquareStretchButton';

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <UserProfileRoute/>
          <div className=" mt-5">
            <h1 className=" text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <p className=" text-3xl mt-3 text-gray-900 block">$140</p>
            <p className=" text-base my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <SquareStretchButton btnText='Talk to seller'/>
              <button className="p-3 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-md">
                <LikeIcon size={6}/>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-full bg-slate-300 mb-4" />
                <h3 className=" text-gray-700 -mb-1">Galaxy S60</h3>
                <p className=" text-sm font-medium text-gray-900">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
