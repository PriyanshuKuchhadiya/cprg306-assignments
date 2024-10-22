export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#1b1c28] text-white p-3 mb-2 rounded-lg flex max-w-sm flex-col">
      <span className="font-bold text-base">{name}</span>
      <span className="text-base">Buy {quantity} in {category}</span>
    </li>
  );
}
