import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
const WeatherApp = () => {
  const apiKey = ["e7d5e50aa5818b0de38b67d1599dc980"];
  const [inputValue, SetinputValue] = useState("");
  const [data, setData] = useState("");
  const getWeatherDetails = (CityName) => {
    if (!CityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then((response) => {
        // console.log("huziiii res",response);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getWeatherDetails("karachi");
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
  };
  const handleSearch = () => {
    getWeatherDetails(inputValue);
    SetinputValue("");
  };
  const handleInput = (e) => {
    SetinputValue(e.target.value);
  };
  return (
    <div className="Main">
      <div className="Bg">
        <nav className="navbar navbar">
          <div
            className="container-fluid 
    
          "
          >
            <h1 className="heading">Weather App</h1>
            <form onSubmit={handleForm} className="d-flex">
              <div className="input-box">
                
                <input
                  onChange={handleInput}
                  type="text"
                  placeholder="Search City..."
                />
                <button onClick={handleSearch} type="submit" className="button">
                  Search
                </button>
              </div>
              {/* <input
                id="inputstyling"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              >
              </input>
              <button
                className="btn btn-primary Search_Btn"
              >
      
              </button> */}
            </form>
          </div>
        </nav>
      </div>
      <div className="weatherResultBox">
        <img
          className="weatherIcon"
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
        />
        <h5 className="WeatherCity">{data?.name}</h5>
        <h6 className="WeatherTemp">
          {(data?.main?.temp - 273.15).toFixed(2)}°C
        </h6>
      </div>
      {/* </section>  */}
    </div>
  );
};
export default WeatherApp;
