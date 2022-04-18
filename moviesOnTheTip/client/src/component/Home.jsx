import React, {useEffect, useState} from "react";
import NavigationBar from "./NavigationBar";
import fetchMovies from "../service/fetchMovies";
import Card from "./Card";

const Home = () =>
{
    const [movies, setMovies]= useState([]);

    useEffect(() => {
        const data =  fetchMovies("movies-coming");
        //const respones = await data;
        setMovies(data);}, []);


    console.log(movies);
    return(
        <>

            <NavigationBar></NavigationBar>

            <h2>
                Movies
            </h2>
            {movies && movies.map(data => {
                <Card src={data.posterurl} title={data.title}/>
            })}

        </>
    );

}

export default Home;