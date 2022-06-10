import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Card({ ach }) {
  const handleClick = async (id) => {
    const docRef = doc(db, "achievements", id);
    await deleteDoc(docRef);
  };

  return (
    <>
      <div>
        {ach.title}
        {ach.tstamp}
        {ach.details}
        {ach.hyplink}
        {ach.category}
        <FontAwesomeIcon icon={faX} onClick={() => handleClick(ach.id)} />
      </div>
    </>
  );
}
