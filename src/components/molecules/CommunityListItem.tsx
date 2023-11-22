import { CommunityListItemProps } from '@/types/types';
import ChatIcon from '@/components/atom/icons/ChatIcon';

const CommunityListItem = ({id, tag, title, userName, uploadTime, interestingCount, answerCount}:CommunityListItemProps) => {
  
  return (
    <div className="flex flex-col items-start">
            <span className="flex items-center px-2.5 py-0.5 rounded-full text-sx font-medium bg-gray-100 text-gray-800">
              {tag}
            </span>
            <div className=" mt-2 text-gray-700">
              <span className="text-orange-500 font-medium">Q.</span> {title}
            </div>
            <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
              <span>{userName}</span>
              <span>{uploadTime}</span>
            </div>
            <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] border-solid border-gray-200 w-full">
              <span className="flex space-x-2 items-center text-sm">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 {interestingCount}</span>
              </span>
              <span className="flex space-x-2 items-center text-sm">
                <ChatIcon/>
                <span>답변 {answerCount}</span>
              </span>
            </div>
          </div>
  );
};

export default CommunityListItem;
