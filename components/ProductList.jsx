'use client';
import Image from 'next/image';
import { urlForImage } from '@/lib/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

export default function ProductList({ product }) {
  console.log(product);
  const dispatch = useDispatch();

  return (
    <div className=" gap-5   justify-center m-auto items-center border border-gray-200 rounded-md p-4">
      <div
        className="rounded-full  p-4 "
        style={{ position: 'relative', width: '250px', height: '250px' }}
      >
        <Image
          src={urlForImage(product.mainImage?.asset._ref).url()}
          alt="my profile picture here"
          layout="fill"
          objectFit="cover"
          className=" lg:px-10"
        />
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-bold ">{product.title}</h2>
        <p>${product.price}</p>
        <p className="text-sm">{product.description}</p>
      </div>
      <button
        className="text-white bg-slate-500 p-4 rounded-md hover:bg-slate-400"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
}
