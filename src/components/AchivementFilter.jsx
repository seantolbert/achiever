const filterList = ["All", "Repo", "App", "Post", "Course", "Resource"];

export default function AchivementFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={` mx-2 rounded-md font-bold ${currentFilter === f ? "border-b-4 border-amber-500 text-amber-300" : ""}`}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
