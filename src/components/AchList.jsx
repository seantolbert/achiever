import Card from "./Card";

export default function AchList({ achs }) {
  return (
    <div>
      {achs
        .sort((a, b) => {
          return new Date(b.tstamp).getTime() - new Date(a.tstamp).getTime();
        })
        .map((ach) => (
          <Card ach={ach} key={ach.id} />
        ))}
    </div>
  );
}
