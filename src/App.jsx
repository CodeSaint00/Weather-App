import "./App.css";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";
import WeatherDetails from "./components/weatherDetails";
import { Fragment, useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (city) => {
    try {
      setLoading(true);
      const apiKey = "5881c630e209c1279ef5512cbbdf213f";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("INCORRECT REQUEST", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body'>
      <SearchBar fetchData={fetchData} />
      <div className="secondSection">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <WeatherCard weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
