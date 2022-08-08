import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°F.`
    );
  }
  let apiKey = "c8a11510610550aa7265609d3d8e0be6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return <Circles color="red" height={80} width={80} />;
}
