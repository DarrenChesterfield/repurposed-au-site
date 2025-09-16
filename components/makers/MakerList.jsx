import MakerCard from "./MakerCard";

export default function MakerList({ makers }) {
  return (
    <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {makers.map((m) => (
        <MakerCard key={m.slug} maker={m} />
      ))}
    </ul>
  );
}
