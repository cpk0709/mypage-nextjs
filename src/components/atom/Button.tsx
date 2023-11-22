import { ReactNode } from 'react';

type FixedButtonProps = {
  children:ReactNode;
}

const Button = ({children}:FixedButtonProps) => {
  
  return (
    <button className="w-14 h-14 text-white bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center">
      {children}
    </button>
  );
};

export default Button;
