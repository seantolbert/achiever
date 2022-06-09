import AchList from "../components/AchList";

import { useCollection } from "../hooks/useCollection";

export default function Dashboard() {
  const { documents: achs } = useCollection("achievements");

  return (
    <div>
      <h1>Dashboard</h1>
      {achs && <AchList achs={achs} />}
    </div>
  );
}
