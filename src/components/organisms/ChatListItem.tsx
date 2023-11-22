type Props = {
  onClick: () => void;
};

const ChatListItem = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className=" cursor-pointer flex px-4 py-3 cursor-pointer border-solid border-slate-400 space-x-3 items-center"
    >
      <div className="w-12 h-12 rounded-full bg-slate-300" />
      <div>
        <p className="text-gray-700">Steve Jebs</p>
        <p className="text-sm text-gray-500">
          See you tomorrow in the corner at 2pm!
        </p>
      </div>
    </div>
  );
};

export default ChatListItem;
