import AchList from "../components/AchList";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import AchivementFilter from "../components/AchivementFilter";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
  const { documents: achs } = useCollection("achievements", [
    "uid",
    "==",
    user.uid,
  ]);

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
console.log(currentFilter)
  const achievements = achs
    ? achs.filter((ach) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "ytcourse":
          case "udemycourse":
          case "repo":
          case "app":
          case "post":
            console.log(achs.category, currentFilter);
            return ach.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h1>Dashboard</h1>
      {achs && (
        <AchivementFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {achs && <AchList achs={achievements} />}
    </div>
  );
}
