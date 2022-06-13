import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Card({ ach }) {
  const handleClick = async (id) => {
    const docRef = doc(db, "achievements", id);
    await deleteDoc(docRef);
  };

  return (
    <>
      <Box w="100%" h="100" bg="teal">
          {ach.title}
          {ach.tstamp}
          {ach.details}
          {ach.hyplink}
          {ach.category}
          <FontAwesomeIcon icon={faX} onClick={() => handleClick(ach.id)} />
      </Box>
    </>
  );
}
