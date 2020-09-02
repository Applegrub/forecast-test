import React from 'react';
import styled from "@emotion/styled";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { RestLink } from 'apollo-link-rest';
import ApolloGetterForecast from "./apolloComponents/ApolloGetterForecast";

const restLink = new RestLink({
    uri: 'https://api.openweathermap.org/data/2.5/weather?q=',
});

const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
});


const App = () => {
    return <Root>
         <ApolloGetterForecast/>
    </Root>
}
const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

export default ApolloApp;


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

&>*{
margin: 5px;
max-width: 400px;
@media screen and (max-width: 600px){
max-width: 300px;
}
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