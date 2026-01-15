import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());

      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 p-2 border rounded"
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className="p-2 bg-blue-500 text-white rounded disabled:opacity-50">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
