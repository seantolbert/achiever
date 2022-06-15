// hooks
import { useLongPress } from "use-long-press";
import { useCallback } from "react";

// firebase
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faArrowUpRightFromSquare,
  faScrewdriverWrench,
  faCrown,
  faLandmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Card({ ach }) {
  const callback = useCallback(async (e) => {
    console.dir(e);
  }, []);

  const bind = useLongPress(callback, {
    threshold: 600,
    captureEvent: true,
    cancelOnMovement: false,
    detect: 'both',
  });
  
  const handleClick = async (id) => {
    // const docRef = doc(db, "achievements", id);
    // await deleteDoc(docRef);
    // console.log(id)
  };

  return (
    <>
      <div
        className={`grid grid-rows-2 grid-cols-5 mx-5 p-2 rounded-lg bg-gradient-to-r from-transparent ${
          ach.category === "Repo"
            ? "to-cyan-500"
            : ach.category === "Course"
            ? "to-yellow-500"
            : ach.category === "App"
            ? "to-rose-500"
            : ach.category === "Resource"
            ? "to-purple-500"
            : ach.category === "Post"
            ? "to-lime-500"
            : ""
        }  `}
      >
        <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
          {ach.category === "Repo" && <FontAwesomeIcon icon={faGithub} />}
          {ach.category === "Course" && <FontAwesomeIcon icon={faLandmark} />}
          {ach.category === "App" && <FontAwesomeIcon icon={faCrown} />}
          {ach.category === "Resource" && (
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          )}
          {ach.category === "Post" && <FontAwesomeIcon icon={faUser} />}
        </div>

        <div className="flex items-start flex-col col-span-3">
          <span className="text-2xl">{ach.title}</span>
          <span className="text-sm">{ach.tstamp}</span>
        </div>
        <button
          {...bind(ach)}
          id={ach.id}
          className="flex justify-center items-center cursor-pointer text-2xl"
          onClick={() => handleClick(ach.id)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className=" text-sm flex text-left items-start col-span-3">
          {ach.details}
        </div>
        <a
          className="flex justify-center items-center text-xl"
          href={ach.hyplink}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </>
  );
}
