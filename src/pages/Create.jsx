import { useState } from "react";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default function Create() {
  const [newAch, setNewAch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "achievements");

    await addDoc(ref, {
      title: newAch,
    });

    setNewAch("");
  };

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add new Achievement</span>
          <input
            type="text"
            onChange={(e) => setNewAch(e.target.value)}
            value={newAch}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
