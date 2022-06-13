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
  
  const achievements = achs
    ? achs.filter((ach) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "Course":
          case "Repo":
          case "App":
          case "Post":
          case "Resource":
            return ach.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <p className="text-3xl font-bold my-10">ACHIEVER</p>
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
