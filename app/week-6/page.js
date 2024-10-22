// /app/week-6/page.js
'use client';

import ItemList from './item-list';

export default function Page() {
  return (
    <main className='pl-3'>
      <h1 className='text-3xl p-[20px]'>Shopping List</h1>
      <ItemList />
    </main>
  );
}
