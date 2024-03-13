import { useState } from "react";

// rlebhar : Le nom du composant est bien mais pas le doossier/fichier
// onSearch, serait plutot onChange
export function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
 const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search films by title..."
        value={inputValue}
        onChange={handleChange} 
      />
      <button type="submit">Search</button>
    </form>
  );
}
