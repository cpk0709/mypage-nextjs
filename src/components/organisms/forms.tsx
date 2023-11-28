/* eslint-disable @typescript-eslint/no-misused-promises */
import { useCallback } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

type UserInputs = {
  name: string;
  email: string;
  password: string;
  phone?: number;
};

const Forms = () => {
  const { register, handleSubmit, clearErrors } = useForm<UserInputs>();

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const onError: SubmitErrorHandler<UserInputs> = useCallback(
    (formError) => {
      if (formError.name?.type === 'required') {
        alert('이름을 입력해 주세요.');
      } else if (formError.email?.type === 'required') {
        alert('이메일을 입력해 주세요.');
      }

      clearErrors();
    },
    [clearErrors],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        type="text"
        placeholder="User name"
        {...register('name', { required: 'user name is required' })}
      />
      <input
        type="email"
        placeholder="User email"
        {...register('email', { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      <input type="text" placeholder="User phone" {...register('phone')} />
      <input type="submit" />
    </form>
  );
};

export default Forms;
