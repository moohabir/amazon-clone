import { urlForImage } from '@/lib/image';
import { decrease, increase, removeItem } from '@/redux/features/cartSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

function CartItems({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Image
        src={urlForImage(item.mainImage.asset._ref).url()}
        width={250}
        height={250}
        alt="cart image"
      />
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <p>${item.price}</p>
      <button
        onClick={() => dispatch(removeItem(item._id))}
        className="text-white bg-slate-500 p-4 rounded-md hover:bg-slate-400  "
      >
        Remove item
      </button>
      <div className="p-4">
        <button
          onClick={() => dispatch(increase(item._id))}
          className="text-white bg-slate-500 p-4 rounded-md hover:bg-slate-400 mx-10 "
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrease(item._id))}
          className="text-white bg-slate-500 p-4 rounded-md hover:bg-slate-400"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartItems;
