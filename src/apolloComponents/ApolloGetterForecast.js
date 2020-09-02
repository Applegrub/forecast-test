import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {graphql} from "react-apollo";
import { useQuery, gql } from '@apollo/client';
import ApolloCityForecast from "./ApolloCityForecast";

const Root = styled.div`
padding: 5px;
color: black;
font-size: 3vh;
`
const Query = gql`
    query {
        response @rest(type: String, path: "London&appid=12048a468d7808777fe096886d9beb48"){
            name
            coord
            weather
            main
            dt
        }
    }
`;
// const ApolloGetterForecast = () => {
//
//     const QueryOneDay = gql`
//         query {
//             response @rest(type: String, path: "London&appid=12048a468d7808777fe096886d9beb48"){
//                 name
//                 coord
//                 weather
//                 main
//                 dt
//             }
//         }
//     `;
//     const { loading, error, data } = useQuery(QueryOneDay);
//
//     if (loading) return <Root>Загрузка...</Root>;
//     if (error) return <Root>{error.message}</Root>;
//
//     return <ApolloCityForecast cityInfo={data}/>;
// }
// const ApolloGetterForecast = ({city}) =>{
//     const Query = gql`
//         query {
//             response @rest(type: String, path: city+"&appid=12048a468d7808777fe096886d9beb48"){
//                 name
//                 coord
//                 weather
//                 main
//                 dt
//             }
//         }
//     `;
    const ApolloGetter = (props) => {
        const {loading, error, data} = props
        if (loading) {
            return <Root>Загрузка...</Root>;
        }
        if (error) {
            return <Root>{error.message}</Root>;
        }
        return (<ApolloCityForecast cityInfo={data}/>)
    }

    const ApolloGetterForecast = graphql(Query, {
        props: ({ data }) => {
            if (data.loading) {
                return {
                    loading: data.loading,
                };
            }

            if (data.error) {
                return {
                    error: data.error,
                };
            }
            console.log(data)
            return {
                data: data,
                loading: false,
            };
        },
    })(ApolloGetter);



export default ApolloGetterForecast
