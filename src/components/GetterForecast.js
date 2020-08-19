import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import CityForecast from "./CityForecast";
import axios from "axios";

const Root = styled.div`
color: white;
font-size: 3vh;
`

function GetterForecast(props) {
    const {city} = props
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12048a468d7808777fe096886d9beb48`)
                .then(({data}) => {
                    setData(data);
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
        return (
            <CityForecast cityInfo={data}/>
        );
    }
}

export default GetterForecast;