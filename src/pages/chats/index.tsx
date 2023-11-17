import { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
        <div
          key={index}
          className="flex px-4 py-3 cursor-pointer border-solid border-slate-400 space-x-3 items-center"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
