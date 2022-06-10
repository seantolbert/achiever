const filterList = ["All", "Repo", "App", "Post", "Course"];

export default function AchivementFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div>
      <nav>
        <p>Filter By:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
