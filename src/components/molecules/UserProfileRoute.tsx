const UserProfileRoute = () => {
  
  return (
    <div className="flex py-3 cursor-pointer border-t border-b border-solid border-slate-400 space-x-3 items-center">
    <div className="w-12 h-12 rounded-full bg-slate-300" />
    <div>
      <p className=" text-sm font-medium text-gray-700">Steve Jebs</p>
      <p className=" text-xs font-medium text-gray-500">
        View profile &rarr;
      </p>
    </div>
  </div>
  );
};

export default UserProfileRoute;
