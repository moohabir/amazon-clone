'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      console.log('User Loged in', { status: 200 }, response.data);
      router.push('/');
    } catch (error) {
      console.log({ Error: error.message });
    }
  };

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
