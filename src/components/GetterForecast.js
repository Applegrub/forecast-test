import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";

const Root = styled.div`
width: 100px;
height: 100px;
color: white;
font-size: 3vh;
display: flex;
align-items: center;
justify-content: center;
background: #a3c7ff;
box-shadow: 0 0 30px rgba(13, 21, 63, 0.25);
`

function GetterForecast() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    const href = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=12048a468d7808777fe096886d9beb48"
    useEffect( () => {
        fetch(href, {method: "GET",}).then(async response => {
            if (response.ok) {
                setIsLoaded(true);
                setItems(response);
                return response;
            } else {
                const err = await response.json();
                throw new Error(err.message);
            }
        });
    }, [])
    if  (!isLoaded) {
        return <Root>Загрузка...</Root>;
    } else {
        return (
            <Root>

            </Root>
        );
    }
}

export default GetterForecast;