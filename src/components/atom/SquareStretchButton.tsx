import { cls } from '@/libs/utils';

type Props = {
  btnText: string;
  buttonStyle?: string[];
}

/**
 * basic 스타일 : 
 * w-full flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium border border-transparent shadow-sm;
 * @param {string} btnText 버튼 텍스트 
 * @param {string[]} buttonStyle 추가할 테일윈드 스타일 string배열로
 * @returns 
 */

const SquareStretchButton = ({btnText, buttonStyle = []}:Props) => {
  
  return (
    <button className={cls(...buttonStyle, 'w-full flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium border border-transparent shadow-sm')}>
      {btnText}
    </button>
  );
};

export default SquareStretchButton;
