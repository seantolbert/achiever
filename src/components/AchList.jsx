import Card from "./Card";

export default function AchList({ achs }) {
  return (
    <div>
      <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-6">
        {achs
          .sort((a, b) => {
            return new Date(b.tstamp).getTime() - new Date(a.tstamp).getTime();
          })
          .map((ach) => (
            <Card ach={ach} key={ach.id} />
          ))}
      </div>
    </div>
  );
}
