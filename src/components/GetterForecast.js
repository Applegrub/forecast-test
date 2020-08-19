import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import List from "@material-ui/core/List";
import CityForecast from "./CityForecast";
import  axios from "axios";

const Root = styled.div`
color: white;
font-size: 3vh;
`

function GetterForecast() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=12048a468d7808777fe096886d9beb48"
    useEffect(() => {
        async function fetchData() {
            await axios.get(url)
                .then(({data}) => {
                    setData(data);
                    console.log(data)
                    setIsLoaded(true);})
                .catch(e => console.error(e))
        }
        fetchData()
    }, [])

     if  (!isLoaded) {
        return <Root>Загрузка...</Root>;
    } else {
        return (
            <List>
                <CityForecast cityInfo = {data}/>
            </List>
        );
    }
}

export default GetterForecast;