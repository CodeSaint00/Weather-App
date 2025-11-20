import dayjs from "dayjs";
import "./weatherCard.css";

function WeatherCard({ weatherData }) {
  const temperature = weatherData?.main?.temp;

  let temp;
  if (temperature < 27 && temperature > 15) {
    temp = <i className="bi bi-thermometer-half"></i>;
  } else if (temperature < 15 && temperature > 0) {
    temp = <i className="bi bi-thermometer-low"></i>;
  } else if (temperature < 60 && temperature > 27) {
    temp = <i className="bi bi-thermometer-high"></i>;
  } else if (temperature < 100 && temperature > 60) {
    temp = <i className="bi bi-thermometer-sun"></i>;
  } else {
    temp = <i className="bi bi-thermometer-snow"></i>;
  }

  return (
    <div className="cardBody">
      <h1>
        <i className="bi bi-globe2"></i> {weatherData?.name}
      </h1>
      <p>{dayjs(weatherData?.dt * 1000).format(`MMMM D YYYY, \n h:mm A`)}</p>
      <h2>
        {temp} {weatherData?.main?.temp}°C
      </h2>
      <div className="pressureHumidity">
        <h4>
          <i className="bi bi-speedometer2"></i>
          &nbsp;{weatherData?.main?.pressure}hpa
        </h4>
        <h4>
          <i className="bi bi-moisture"></i>
          &nbsp;{weatherData?.main?.humidity}%
        </h4>
      </div>
    </div>
  );
}

export default WeatherCard;
