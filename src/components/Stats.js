export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>start new item in your paking list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? `You got everything to go`
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </p>
    </footer>
  );
}
