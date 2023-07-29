import Image from 'next/image';
import Product from './product/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Amazon Clone
        <Product />
      </h1>
    </main>
  );
}
