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
  const handleClick = async (id) => {
    const docRef = doc(db, "achievements", id);
    await deleteDoc(docRef);
    console.log("you double clicked");
  };

  return (
    <>
      <div
        className={`w-full grid grid-rows-2 grid-cols-5 p-2 rounded-lg border-t-4 border-l-4 shadow-neu ${
          ach.category === "Repo"
            ? "border-cyan-300"
            : ach.category === "Course"
            ? "border-yellow-300"
            : ach.category === "App"
            ? "border-rose-300"
            : ach.category === "Resource"
            ? "border-purple-300"
            : ach.category === "Post"
            ? "border-lime-300"
            : ""
        }  `}
      >
        <div className="flex w-full justify-center items-center text-5xl row-span-2 p-2">
          {ach.category === "Repo" && <FontAwesomeIcon icon={faGithub} />}
          {ach.category === "Course" && <FontAwesomeIcon icon={faLandmark} />}
          {ach.category === "App" && <FontAwesomeIcon icon={faCrown} />}
          {ach.category === "Resource" && (
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          )}
          {ach.category === "Post" && <FontAwesomeIcon icon={faUser} />}
        </div>

        <div className={`flex items-start flex-col col-span-3 `}>
          <span className="text-2xl">{ach.title}</span>
          <span className="text-sm">{ach.tstamp}</span>
        </div>

        <button
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
