import "./weatherDetails.css";

function WeatherDetails({ weatherData }) {
  return (
    <div className="detailsBody">
      <p>{weatherData?.weather?.[0]?.description}</p>
    </div>
  );
}

export default WeatherDetails;
