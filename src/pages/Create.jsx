import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

// import Select from "react-select";

// const categories = [
//   { value: "Course", label: "Course" },
//   { value: "Repo", label: "Repo" },
//   { value: "App", label: "App" },
//   { value: "Post", label: "Post" },
// ];

// const subcategories = [
//   { value: "udemy", label: "Udemy" },
//   { value: "youtube", label: "Youtube" },
// ];

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [hyplink, setHyplink] = useState("");
  const [tstamp, setTstamp] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "achievements");

    await addDoc(ref, {
      title,
      details,
      hyplink,
      tstamp,
      category: category.value,
      subcategory: subcategory.value,
      uid: user.uid,
    });

    setTitle("");
    setDetails("");
    setHyplink("");
    setTstamp("");
    setCategory("");
  };

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Link</span>
          <input
            type="text"
            onChange={(e) => setHyplink(e.target.value)}
            value={hyplink}
          />
        </label>
        <label>
          <span>Title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Details</span>
          <textarea
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="datetime-local"
            onChange={(e) => setTstamp(e.target.value)}
            value={tstamp}
          />
        </label>
        {/* <label>
          <span>Category</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        {category.value === "course" && (
          <label>
            <span>Course Source</span>
            <Select
              options={subcategories}
              onChange={(option) => setSubcategory(option)}
            />
          </label>
        )} */}
        <button>Add</button>
      </form>
    </>
  );
}
