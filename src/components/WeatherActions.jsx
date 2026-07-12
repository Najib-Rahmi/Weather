import SearchBar from "./SearchBar";

const WeatherActions = ({ onSearch, loading, onUseCurrentLocation }) => (
  <>
    <SearchBar
      onSearch={onSearch}
      loading={loading}
    />

    <button
      onClick={onUseCurrentLocation}
      className="mb-4 p-2 bg-green-500 text-white rounded w-full hover:bg-green-600 disabled:opacity-50"
      disabled={loading}>
      Use Current Location
    </button>
  </>
);

export default WeatherActions;
