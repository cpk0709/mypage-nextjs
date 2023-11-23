import { cls } from '@/libs/utils';

interface Props {
  message: string;
  reversed?: boolean;
  avataUrl?: string;
}

const Message = ({ message, reversed, avataUrl }: Props) => {
  return (
    <div
      className={cls(
        'flex  items-start',
        reversed ? 'flex-row-reverse space-x-reverse' : 'space-x-2',
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-solid border-gray-300 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
