import { cls } from '@/libs/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GoBackIcon from '@/components/atom/icons/GoBackIcon';
import HomeIcon from '@/components/atom/icons/HomeIcon';
import CommunityIcon from '@/components/atom/icons/CommunityIcon';
import ChatTwoIcon from '@/components/atom/icons/ChatTwoIcon';
import VideoIcon from '@/components/atom/icons/VideoIcon';
import UserIcon from '@/components/atom/icons/UserIcon';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
}

const Layout = ({ children, title, hasTabBar, canGoBack }: LayoutProps) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? 'justify-center' : '',
          'bg-white w-full text-lg font-medium max-w-xl fixed top-0 py-3 px-10 text-gray-700 border-b border-solid border-gray-300 flex items-center',
        )}
      >
        {canGoBack ? (
          <button onClick={onClick}>
            <GoBackIcon />
          </button>
        ) : null}
        {title && <span>{title}</span>}
      </div>
      <div className={cls('pt-12', hasTabBar ? 'pb-24' : '')}>{children}</div>
      {hasTabBar && (
        <nav className=" bg-white text-gray-800 border-t border-solid border-gray-300 fixed w-full max-w-xl bottom-0 pb-10 pt-3 flex justify-around items-center">
          <div className=" flex flex-col items-center space-y-2">
            <Link
              href={'/'}
              className={cls(
                'flex flex-col items-center space-y-2 ',
                router.pathname === '/'
                  ? 'text-orange-500'
                  : 'hover:text-gray-500 transition-colors',
              )}
            >
              <HomeIcon />
              <span>home</span>
            </Link>
          </div>
          <div className=" flex flex-col items-center space-y-2">
            <Link
              href={'/community'}
              className={cls(
                'flex flex-col items-center space-y-2 ',
                router.pathname === '/community'
                  ? 'text-orange-500'
                  : 'hover:text-gray-500 transition-colors',
              )}
            >
              <CommunityIcon />
              <span>news</span>
            </Link>
          </div>
          <div className=" flex flex-col items-center space-y-2">
            <Link
              href={'/chats'}
              className={cls(
                'flex flex-col items-center space-y-2 ',
                router.pathname === '/chats'
                  ? 'text-orange-500'
                  : 'hover:text-gray-500 transition-colors',
              )}
            >
              <ChatTwoIcon />
              <span>chat</span>
            </Link>
          </div>
          <div className=" flex flex-col items-center space-y-2">
            <Link
              href={'/streams'}
              className={cls(
                'flex flex-col items-center space-y-2 ',
                router.pathname === '/streams'
                  ? 'text-orange-500'
                  : 'hover:text-gray-500 transition-colors',
              )}
            >
              <VideoIcon />
              <span>stream</span>
            </Link>
          </div>
          <div className=" flex flex-col items-center space-y-2">
            <Link
              href={'/profile'}
              className={cls(
                'flex flex-col items-center space-y-2 ',
                router.pathname === '/profile'
                  ? 'text-orange-500'
                  : 'hover:text-gray-500 transition-colors',
              )}
            >
              <UserIcon />
              <span>user</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;
