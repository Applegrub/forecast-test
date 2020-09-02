import React from "react";
import styled from "@emotion/styled";
import {ApolloProvider, graphql} from "react-apollo";
import gql from 'graphql-tag';
import ApolloCityForecast from "./ApolloCityForecast";
import {RestLink} from "apollo-link-rest";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";


const Root = styled.div`
padding: 5px;
color: black;
font-size: 3vh;
`

const Query = gql`
    query {
        oneDay @rest(type: String, path: "", endpoint: "v1"){
            name
            coord
            weather
            main
            dt
        }
        threeDays @rest(type: String, path: "", endpoint: "v2"){
            daily
        }
    }
`;

const ApolloGetter = (props) => {
    const {loading, error, data} = props

    if (loading) return <Root>Загрузка...</Root>;
    if (error) return <Root>{error.message}</Root>;

    return (<ApolloCityForecast cityInfo={data}/> )
}

const map = new Map([
    ['London', [-0.13, 51.51]],
    ['Moscow', [37.618423, 55.751244]],
    ['Vienna', [16.37, 48.21]]])


const ApolloGetterForecast = ({city}) => {
    const coords = map.get(city)
    const restLink = new RestLink({
        endpoints: {v1: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12048a468d7808777fe096886d9beb48`,
            v2: `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[1]}&lon=${coords[0]}&exclude=hourly&appid=3238ccb17a8a11abd9f0a08c8f575a8f`}
    });

    const client = new ApolloClient({
        link: restLink,
        cache: new InMemoryCache(),
    });

    const Wrapper = graphql(Query, {
        props: ({data}) => {
            if (data.loading) return {loading: data.loading,};
            if (data.error) return {error: data.error,};

            console.log(data)

            return {data: data, loading: false,};
        },
    })(ApolloGetter);

    return (<ApolloProvider client={client}>
        <Wrapper/>
    </ApolloProvider>)
}

export default ApolloGetterForecast

//Get more response, than request. wtf?!
// const Wrapper = ({city}) =>{
//
//     const Query = gql`
//         query($city: String!) {
//             response(city: $city) @rest(type: String, path: "${city}&appid=12048a468d7808777fe096886d9beb48", endpoint: "v1"){
//                 name
//                 coord
//                 weather
//                 main
//                 dt
//             }
//         }
//     `;
//
//     const ApolloGetter = (props) => {
//         const {loading, error, data} = props
//
//         if (loading) return <Root>Загрузка...</Root>;
//         if (error) return <Root>{error.message}</Root>;
//
//         return (<ApolloCityForecast cityInfo={data}/>)
//     }
//
//     const ApolloGetterForecast = graphql(Query, {
//         props: ({ data }) => {
//             if (data.loading) return {loading: data.loading,};
//             if (data.error) return {error: data.error,};
//
//             console.log(data)
//
//             return {data: data, loading: false,};
//         },
//     })(ApolloGetter);
//     return <ApolloGetterForecast/>
// }