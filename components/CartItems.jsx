import { urlForImage } from '@/lib/image';
import Image from 'next/image';

function CartItems({ item }) {
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
    </div>
  );
}

export default CartItems;
