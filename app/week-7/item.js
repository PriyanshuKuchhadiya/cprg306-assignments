export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white p-4 mb-3 rounded-lg flex flex-col max-w-sm">
      <span className="font-semibold text-lg">{name}</span>
      <span className="text-sm text-gray-300">Buy {quantity} in {category}</span>
    </li>
  );
}
