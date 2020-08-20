import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import CityForecast from "./CityForecast";
import axios from "axios";

const Root = styled.div`
padding: 5px;
color: black;
font-size: 3vh;
`

const map = new Map([
    ['London', [-0.13,51.51]],
    ['Moscow', [37.618423,55.751244]],
    ['Wien', [16.37, 48.21]]])

function GetterForecast(props) {
    const {city} = props
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});
    const [dataThreeDays, setDataThreeDays] = useState({});

    const coords = map.get(city)
    const oneDayAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12048a468d7808777fe096886d9beb48`;
    const threeDayAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[1]}&lon=${coords[0]}&exclude=hourly&appid=3238ccb17a8a11abd9f0a08c8f575a8f`;
    useEffect(() => {
        async function fetchData() {
            await axios.get(oneDayAPI)
                .then(({data}) => {
                    setData(data);
                    setIsLoaded(true);
                })
                .catch(e => console.error(e))
            await axios.get(threeDayAPI)
                .then(({data}) => {
                    setDataThreeDays(data);
                    setIsLoaded(true);
                })
                .catch(e => console.error(e))
        }
        fetchData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isLoaded) {
        return <Root>Загрузка...</Root>;
    } else {
        return (<CityForecast cityInfo={data} dataThreeDays={dataThreeDays}/>)
    }
}

export default GetterForecast;