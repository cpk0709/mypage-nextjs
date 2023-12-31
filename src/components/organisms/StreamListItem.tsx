type Props = {
  onClick: () => void;
};

const StreamListItem = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className=" cursor-pointer pt-4">
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <h3 className=" text-gray-700 text-lg mt-2">Let&apos;s try potatos</h3>
    </div>
  );
};

export default StreamListItem;
