import { useState, useEffect } from "react";
import AchList from "../components/AchList";

import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [ach, setAch] = useState(null);

  useEffect(() => {
    const ref = collection(db, "achievements");

    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setAch(results);
    });
  }, []);

  return <div>{ach && <AchList ach={ach} />}</div>;
}
