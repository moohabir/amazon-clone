'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { login, reset } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.user
  );
  console.log(user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess || user) {
      router.push('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border border-slate-200 rounded-md p-10 hover:bg-slate-100">
      <h1>Sign in</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Login in</button>
      </form>
    </div>
  );
}
