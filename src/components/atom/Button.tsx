import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="w-14 h-14 text-white bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center">
      {children}
    </button>
  );
};

export default Button;
