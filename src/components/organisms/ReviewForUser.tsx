import StarIcon from '@/components/atom/icons/StarIcon';
import { ReviewForUserProps } from '@/types/types';
import { ReactNode } from 'react';

const ReviewForUser = ({ userName, score, desc }: ReviewForUserProps) => {
  const handleScore = () => {
    const stars: ReactNode[] = [];

    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push(<StarIcon key={i} textColorClass="text-yellow-400" />);
        continue;
      }

      stars.push(<StarIcon key={i} />);
    }

    return stars;
  };

  return (
    <div className="mt-12">
      <div className="flex space-x-4 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-400" />
        <div>
          <h4 className="text-sm font-bold text-gray-800">{userName}</h4>
          <div className="flex items-center">{handleScore()}</div>
        </div>
      </div>
      <div className="mt-4 text-gray-600 text-sm">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ReviewForUser;
