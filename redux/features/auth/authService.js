'use client';
import axios from 'axios';
import { cookies } from 'next-cookies';
//import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_SANITY_SERVER_API;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'signup', userData);

  //if (response.data) {
  //localStorage.setItem('user', JSON.stringify(response.data));
  //cookieCutter.set('myCookieName', 'some-value')
  //}

  return response.data;
};

// Login user
const login = async (userData) => {
  // const config = {
  // headers: {
  //  Authorization: `Bearer ${token}`,
  // },
  //};
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    // cookies.set('token', response.data.token);
  }

  return response.data;
};

// Logout user
const logout = () => {
  //localStorage.removeItem('user');
  cookies.destroy(null, 'token'); // Remove the 'token' cookie
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
