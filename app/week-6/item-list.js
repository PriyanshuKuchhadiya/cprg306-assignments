// /app/week-6/item-list.js
'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div style={{ marginBottom: '15px' }}>
        <span>Sort by: </span>
        <button
          onClick={() => setSortBy('name')}
          style={{
            backgroundColor: sortBy === 'name' ? '#ff7b3d' : 'white',
            color: sortBy === 'name' ? 'white' : 'black',
            marginRight: '10px',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{
            backgroundColor: sortBy === 'category' ? '#ff7b3d' : 'white',
            color: sortBy === 'category' ? 'white' : 'black',
            marginRight: '10px',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Category
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
