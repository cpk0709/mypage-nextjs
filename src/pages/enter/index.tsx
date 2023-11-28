/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import { cls } from '@/libs/client/utils';
import { useForm } from 'react-hook-form';
import Input from '@/components/molecules/Input';
import GithubIcon from '@/components/atom/icons/GithubIcon';
import TwitterIcon from '@/components/atom/icons/TwitterIcon';

interface EnterForm {
  email?: string;
  phone?: string;
}

export default function Enter() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const { register, reset, handleSubmit } = useForm<EnterForm>();

  const onEmailClick = () => {
    reset();
    setMethod('email');
  };

  const onPhoneClick = () => {
    reset();
    setMethod('phone');
  };

  const onValid = (data: EnterForm) => {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch('/api/users/enter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className=" text-sm text-gray-500 font-medium">Enter using:</h5>
          <div className="grid w-full border-b border-solid border-gray-200 grid-cols-2 gap-16 mt-8">
            <button
              className={cls(
                'pd-4 font-medium border-b-2',
                method === 'email'
                  ? 'text-orange-500 border-solid border-orange-500'
                  : 'border-transparent text-gray-500',
              )}
              onClick={onEmailClick}
            >
              Email
            </button>
            <button
              className={cls(
                'pd-4 font-medium border-b-2',
                method === 'phone'
                  ? 'text-orange-500 border-solid border-orange-500'
                  : 'border-transparent text-gray-500',
              )}
              onClick={onPhoneClick}
            >
              Phone
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onValid)}>
          <div className=" mt-1">
            {method === 'email' ? (
              <Input
                register={register('email')}
                label={method}
                kind="email"
                name={method}
                type="email"
                required
              />
            ) : undefined}
            {method === 'phone' ? (
              <Input
                register={register('phone')}
                label={method}
                kind="phone"
                name={method}
                required
              />
            ) : undefined}
          </div>
          {isLoading && <div>Loading...</div>}
          <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md w-full shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            {method === 'email' ? 'Get login link' : undefined}
            {method === 'phone' ? 'Get one-time password' : undefined}
          </button>
        </form>
        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-solid border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="flex justify-center items-center py-2 px-4 border border-solid border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-300">
              <TwitterIcon />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-solid border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-300">
              <GithubIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
