import Button from '@/components/atom/Button';

type BtnTextColProps = {
  children: React.ReactNode;
  btnText:string;
}

const BtnTextCol = ({children,btnText}:BtnTextColProps) => {
  
  return (
    <div className="flex flex-col items-center">
      <Button>
        {children}
      </Button>
      <span className="text-sm font-medium text-gray-700 mt-2">
        {btnText}
      </span>
    </div>
  );
};

export default BtnTextCol;
