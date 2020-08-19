import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "@emotion/styled";
import DialogContent from "@material-ui/core/DialogContent";
import {toCelsius} from "./CityForecast"

const Title = styled.div`
padding: 16px 24px;
text-align: center;
font-size: 30px;
@media screen and (max-width: 600px){
font-size: 20px;
}
`
const Info = styled.div`
font-size: 20px;
@media screen and (max-width: 600px){
font-size: 15px;
}
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

function InfoDialog(props) {

    const {onClose, open, cityInfo} = props;

    const handleClose = () => {
        onClose(open);
    };

    const main = cityInfo.main
    return (
        <Dialog onClose={handleClose} open={open}>
            <Title>More about weather</Title>
            <DialogContent>
                <Info>
                    <div>Temperature min: {toCelsius(main.temp_min)} °C</div>
                    <div>Temperature max: {toCelsius(main.temp_max)} °C</div>
                    <div>And it feels like {toCelsius(main.feels_like)} °C</div>
                    <WeatherContent>
                        <Weather src={`https://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`}
                                 alt={cityInfo.weather[0].main}/>
                        <div> {cityInfo.weather[0].description}</div>
                    </WeatherContent>
                    <div> Wind: {cityInfo.wind.speed} m/s</div>
                </Info>
            </DialogContent>
        </Dialog>
    );
}

export default InfoDialog;