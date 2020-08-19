import React from 'react';
import styled from "@emotion/styled";
import GetterForecast from "./components/GetterForecast";

const Root = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(149.94deg, #CDF0FF 9.2%, 
rgba(186, 223, 244, 0.98991) 21.69%, 
rgba(56, 102, 169, 0.92) 63.84%, #2E5DA4 83.89%, #2E5DA4 91.59%);

margin: -5px;
&>*{
margin: 5px;
}

.makeStyles-root-1{
border-radius: 10px;
background: white;
}
.MuiListItemText-primary{
color: black;
font-size: 25px;
}
.MuiListItemText-secondary{
color: black;
font-size: 20px;
}
`
const citys = ['London', 'Moscow', 'Canberra']

function App() {
    return <Root>
        {citys.map((city) => <GetterForecast key={city} city={city}/>)}
    </Root>
}

export default App;
