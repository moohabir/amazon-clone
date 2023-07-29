'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});