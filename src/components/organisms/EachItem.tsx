import { EachItemProps } from '@/types/types';
import ChatIcon from '@/components/atom/icons/ChatIcon';
import LikeIcon from '@/components/atom/icons/LikeIcon';

const EachItem = ({
  id,
  itemTitle,
  option,
  price,
  likeCount,
  chatCount,
}: EachItemProps) => {
  return (
    <div className=" px-4 border-b border-solid border-gray-200 pb-4 cursor-pointer flex justify-between">
      <div className="flex space-x-4">
        <div className="w-20 h-20 bg-gray-400 rounded-md" />
        <div className="pt-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">{itemTitle}</h3>
          <span className="text-xs text-gray-500">{option}</span>
          <span className=" font-medium mt-1 text-gray-900">${price}</span>
        </div>
      </div>
      <div className="flex space-x-2 justify-end items-end">
        <div className="flex space-x-0.5 items-center text-sm text-gray-600">
          <LikeIcon />
          <span>{likeCount}</span>
        </div>
        <div className="flex space-x-0.5 items-center text-sm text-gray-600">
          <ChatIcon />
          <span>{chatCount}</span>
        </div>
      </div>
    </div>
  );
};

export default EachItem;
