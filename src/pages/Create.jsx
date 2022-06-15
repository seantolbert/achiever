import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import Select from "react-select";

const categories = [
  { value: "Course", label: "Course" },
  { value: "Repo", label: "Repo" },
  { value: "App", label: "App" },
  { value: "Post", label: "Post" },
  { value: "Resource", label: "Resource" },
];

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [hyplink, setHyplink] = useState("");
  const [tstamp, setTstamp] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "achievements");

    await addDoc(ref, {
      title,
      details,
      hyplink,
      tstamp,
      category: category.value,
      uid: user.uid,
    });

    navigate('/')
    setTitle("");
    setDetails("");
    setHyplink("");
    setTstamp("");
    setCategory("");
  };

  const customSelect = {
    option: (state, provided) => ({
      ...provided,
      color: "#f59e0b",
      padding: "12px",
      boxShadow: state.isSelected
        ? "5px 5px 10px #1d1d1d, -5px -5px 10px #434343"
        : "",
    }),
    control: (provided) => ({
      ...provided,
      background: "transparent",
      border: "none",
      boxShadow: "5px 5px 10px #1d1d1d, -5px -5px 10px #434343",
      caretColor: "#f59e0b",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      color: "#f59e0b",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "12px",
    }),
    menu: (provided) => ({
      ...provided,
      background: "transparent",
      boxShadow: "inset 5px 5px 10px #1d1d1d, inset -5px -5px 10px #434343",
      borderRadius: "12px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#f59e0b",
      textAlign: "left",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#f59e0b",
    }),
  };

  return (
    <>
      <p className="text-amber-500 text-5xl my-20">Create</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-10">
        <label>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
            styles={customSelect}
          />
        </label>
        {category.value && (
          <>
            <label className="text-left">
              <span className="font-bold text-amber-300">
                Where can we find this {category.value}?
              </span>
              <input
                className="mt-3 w-full rounded-md p-2 pl-3 text-lg bg-transparent active:shadow-neu focus:shadow-neu active:placeholder:text-white focus:placeholder:text-white text-amber-500 placeholder:text-amber-500 caret-amber-500"
                type="text"
                onChange={(e) => setHyplink(e.target.value)}
                value={hyplink}
                placeholder="link"
              />
            </label>
            <label className="text-left">
              <span className="font-bold text-amber-300">
                What do we want to call this {category.value}?
              </span>
              <input
                className="mt-3 w-full rounded-md p-2 pl-3 text-lg bg-transparent active:shadow-neu focus:shadow-neu active:placeholder:text-white focus:placeholder:text-white text-amber-500 placeholder:text-amber-500 caret-amber-500"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="title"
              />
            </label>
            <label className="text-left w-3/5">
              <span className="text-left font-bold text-amber-300">
                When did this happen?
              </span>
              <input
                className="mt-3 rounded-md p-2 pl-3 text-lg bg-transparent active:shadow-neu focus:shadow-neu active:placeholder:text-white focus:placeholder:text-white text-amber-500 placeholder:text-amber-500 caret-amber-500"
                type="date"
                onChange={(e) => setTstamp(e.target.value)}
                value={tstamp}
                placeholder="when?"
              />
            </label>
            <label className="text-left h-fit">
              <span className="text-amber-300 font-bold">
                Would a description come in handy?
              </span>
              <textarea
                className="mt-3 peer w-full rounded-md p-2 pl-3 text-lg bg-transparent active:shadow-neu focus:shadow-neu active:placeholder:text-white focus:placeholder:text-white text-amber-500 placeholder:text-amber-500 caret-amber-500"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
                placeholder="thoughts?"
              />
            </label>
            <button className="font-bold transition duration-500 rounded-lg p-3 text-amber-500 shadow-neu active:shadow-pressedNeu text-xl w-1/3 self-end">
              Add
            </button>
          </>
        )}
      </form>
    </>
  );
}
