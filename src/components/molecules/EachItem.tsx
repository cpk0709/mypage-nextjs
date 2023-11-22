import { EachItemProps } from '@/types/types';
import ChatIcon from '@/components/atom/icons/ChatIcon';

const EachItem = ({
  id,
  itemTitle,
  option,
  price,
  likeCount,
  chatCount,
}: EachItemProps) => {
  return (
    <div
      className=" px-4 border-b border-solid border-gray-200 pb-4 cursor-pointer flex justify-between"
    >
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
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{likeCount}</span>
        </div>
        <div className="flex space-x-0.5 items-center text-sm text-gray-600">
          <ChatIcon/>
          <span>{chatCount}</span>
        </div>
      </div>
    </div>
  );
};

export default EachItem;
