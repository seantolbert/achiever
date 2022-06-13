import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
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
  };

  return (
    <>
      {ach.category === "Repo" && (
        <div className="grid grid-rows-2 grid-cols-5 bg-gradient-to-r from-transparent to-cyan-500 mx-5 p-2 rounded-lg max-w-lg">
          <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
            <FontAwesomeIcon icon={faGithub} />
          </div>

          <div className="flex items-start flex-col col-span-3">
            <span className="text-2xl">{ach.title}</span>
            <span className="text-sm">{ach.tstamp}</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(ach.id)} className="border-2 rounded-full p-1"/>
          </div>
          <div className=" text-sm flex text-left items-start col-span-3">
            {ach.details}
          </div>
          <a className="flex justify-center items-center" href={ach.hyplink}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      )}
      {ach.category === "App" && (
        <div className="grid grid-rows-2 grid-cols-5 bg-gradient-to-r from-transparent to-yellow-500 mx-5 p-2 rounded-lg max-w-lg">
          <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
            <FontAwesomeIcon icon={faCrown} />
          </div>

          <div className="flex items-start flex-col col-span-3">
            <span className="text-2xl">{ach.title}</span>
            <span className="text-sm">{ach.tstamp}</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(ach.id)} className="border-2 rounded-full p-1" />
          </div>
          <div className=" text-sm flex text-left items-start col-span-3">
            {ach.details}
          </div>
          <a className="flex justify-center items-center" href={ach.hyplink}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      )}
      {ach.category === "Resource" && (
        <div className="grid grid-rows-2 grid-cols-5 bg-gradient-to-r from-transparent to-purple-500 mx-5 p-2 rounded-lg max-w-lg">
          <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </div>

          <div className="flex items-start flex-col col-span-3">
            <span className="text-2xl">{ach.title}</span>
            <span className="text-sm">{ach.tstamp}</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(ach.id)} className="border-2 rounded-full p-1" />
          </div>
          <div className=" text-sm flex text-left items-start col-span-3">
            {ach.details}
          </div>
          <a className="flex justify-center items-center" href={ach.hyplink}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      )}
      {ach.category === "Course" && (
        <div className="grid grid-rows-2 grid-cols-5 bg-gradient-to-r from-transparent to-lime-500 mx-5 p-2 rounded-lg max-w-lg">
          <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
            <FontAwesomeIcon icon={faLandmark} />
          </div>

          <div className="flex items-start flex-col col-span-3">
            <span className="text-2xl">{ach.title}</span>
            <span className="text-sm">{ach.tstamp}</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(ach.id)} className="border-2 rounded-full p-1" />
          </div>
          <div className=" text-sm flex text-left items-start col-span-3">
            {ach.details}
          </div>
          <a
            className="flex justify-center items-center"
            rel="noreferrer"
            target="_blank"
            href={ach.hyplink}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      )}
      {ach.category === "Post" && (
        <div className="grid grid-rows-2 grid-cols-5 bg-gradient-to-r from-transparent to-rose-500 mx-5 p-2 rounded-lg max-w-lg">
          <div className="flex w-full justify-center items-center w-10 text-5xl row-span-2">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="flex items-start flex-col col-span-3">
            <span className="text-2xl">{ach.title}</span>
            <span className="text-sm">{ach.tstamp}</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faXmark} onClick={() => handleClick(ach.id)} className="border-2 rounded-full p-1"/>
          </div>
          <div className=" text-sm flex text-left items-start col-span-3">
            {ach.details}
          </div>
          <a className="flex justify-center items-center" href={ach.hyplink}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      )}
    </>
  );
}
