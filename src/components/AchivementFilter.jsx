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
            className={` mx-3 rounded-md ${currentFilter === f ? "underline underline-offset-8" : ""}`}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
