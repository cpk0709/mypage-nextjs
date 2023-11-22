import { ReactNode } from 'react';

type FloatingButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const FloatingButton = ({ children, onClick }: FloatingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white shadow-xl"
    >
      {children}
    </button>
  );
};

export default FloatingButton;
