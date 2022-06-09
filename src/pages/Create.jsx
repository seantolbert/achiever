import { useState } from "react";

export default function Create() {
  const [newAch, setNewAch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newAch);
    setNewAch("");
  };

  return (

      <form>

      </form>
  ) 
}
