import React from "react";
import styled from "@emotion/styled";
import {toCelsius} from "./CityForecast";


const Root = styled.div`
font-size: 20px;
@media screen and (max-width: 600px){
font-size: 15px;
}
margin: 5px 0;
padding: -5px;
&>*{
padding: 5px;
}
`
const WeatherContent = styled.div`
display: flex;
align-items: center;
`
const Weather = styled.img``

const OneDayForecast = (props) => {
    const {day} = props;
    const date = (timestamp) => new Date(timestamp * 1000).toLocaleDateString();
    return <Root>
        <div>Date: {date(day.dt)}</div>
        <div>Temperature: {toCelsius(day.temp.day)} °C</div>
        <WeatherContent>
            <Weather src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                     alt={day.weather[0].main}/>
            <div> {day.weather[0].description}</div>
        </WeatherContent>
    </Root>
}
export default OneDayForecast;