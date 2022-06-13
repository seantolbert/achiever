import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faCirclePlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <>
      <nav className="flex justify-end z-200" role="navigation">
        <div className="transition duration-500 bg-lightGrey flex gap-4 justify-center items-center fixed top-full height-screen h-fit w-fit rounded-full p-5 -translate-y-20">
          <label
            htmlFor="checker"
            className="absolute peer-checked:hidden flex justify-start items-center bg-black rounded-full p-6 translate-x-6"
          >
            <FontAwesomeIcon icon={faBars} className="-translate-x-5"/>
          </label>
          <input
            id="checker"
            className="peer checked:w-6 checked:h-6 w-16 h-16 absolute z-203 opacity-0 "
            type="checkbox"
          />

          <Link
            to="/"
            className="flex justify-center items-center text-light text-2xl bg-black rounded-full h-14 w-14 absolute transition duration-500 -translate-y-20 translate-x-52 peer-checked:translate-x-0"
          >
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            to="/create"
            className="flex justify-center items-center text-light text-2xl bg-black rounded-full h-14 w-14 absolute transition duration-400 -translate-y-36 translate-x-52 peer-checked:translate-x-0"
          >
            <FontAwesomeIcon icon={faCirclePlus} />
          </Link>
          <span className="flex justify-center items-center text-light text-2xl bg-black rounded-full h-14 w-14 absolute transition duration-300 -translate-y-52 translate-x-52 peer-checked:translate-x-0" >
            <FontAwesomeIcon icon={faRightFromBracket} onClick={logout} />
          </span>
        </div>
      </nav>
    </>
  );
}
