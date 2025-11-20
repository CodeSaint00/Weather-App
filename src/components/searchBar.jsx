import "./searchBar.css";
import { useState } from "react";

function SearchBar({ fetchData }) {
  const [city, setCity] = useState("");

  const handleFetch = (e) => {
    e.preventDefault();
    fetchData(city);
    setCity("");
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetch} className="button"><i className='bi bi-search'></i></button>
    </div>
  );
}

export default SearchBar;
