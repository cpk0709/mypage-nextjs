import { cls } from '@/libs/utils';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
}

const Layout = ({ children, title, hasTabBar, canGoBack }: LayoutProps) => {
  return (
    <div>
      <div className="bg-white w-full text-lg font-medium fixed top-0 py-3 text-gray-700 border-b border-solid border-gray-300 flex items-center justify-center">
        {title && <span>{title}</span>}
      </div>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar && <nav className=' bg-white text-gray-800 border-t border-solid border-gray-300 fixed bottom-0 pb-10 pt-3 flex justify-between items-center'></nav>}
    </div>
  );
};

export default Layout;
