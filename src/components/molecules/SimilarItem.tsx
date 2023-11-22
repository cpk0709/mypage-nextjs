type Props = {
  title: string;
  price: number;
};

const SimilarItem = ({ title, price }: Props) => {
  return (
    <div>
      <div className="h-56 w-full bg-slate-300 mb-4" />
      <h3 className=" text-gray-700 -mb-1">{title}</h3>
      <p className=" text-sm font-medium text-gray-900">${price}</p>
    </div>
  );
};

export default SimilarItem;
