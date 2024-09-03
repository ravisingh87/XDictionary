import React, { useState } from "react";
const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const [def, setDef] = useState("");
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = () => {
    let defTxt = data.filter(
      (item) => item.word.toLowerCase() === searchTxt.toLowerCase()
    );
    if (defTxt.length) {
      setDef(defTxt[0].meaning);
    } else {
      setDef("Word not found in the dictionary.");
    }
  };

  return (
    <section>
      <h2>Dictionary App</h2>
      <input
        type='text'
        required
        autoComplete='off'
        name='search'
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      {def && <p>{def}</p>}
    </section>
  );
};

export default Dictionary;
