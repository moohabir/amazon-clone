//import BlogList from '../components/BlogList';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';

import Image from 'next/image';
import { urlForImage } from '@/lib/image';
import ProductList from '@/components/ProductList';

const query = groq`
*[_type=="product"]{
 ...,
author->
}|order(_createAt desc)`;

//type props = {
//query: string;
//};

export default async function Product() {
  const products = await client.fetch(query, { cache: 'no-store' });

  return (
    <div className="flex flex-col items-center justify-between p-24 gap-10">
      <h1 className="font-bold text-3xl">My Products</h1>
      <div className="flex gap-10">
        {products.map((product) => (
          <ProductList
            product={product}
            key={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
