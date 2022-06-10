import AchList from "../components/AchList";

import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents: achs } = useCollection(
      'achievements',
      ['uid', '==', user.uid]
  )

  return (
    <div>
      <h1>Dashboard</h1>
      {achs && <AchList achs={achs} />}
    </div>
  );
}
