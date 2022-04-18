import React, {useEffect, useState} from "react";
import NavigationBar from "./NavigationBar";
import fetchMovies from "../service/fetchMovies";
import Card from "./Card";

const Home =  () =>
{

    let data = null;
    /*const [movies, setMovies]= useState([]);

    useEffect(() => {
        const data =  fetchMovies("movies-coming");
        //const respones = await data;
        setMovies(data);}, []);*/

    useEffect(  () => {
        data = movies().then(response => console.log(response));
    }, [])

    const movies = async () =>  await fetchMovies("movies-coming");

    return(
        <>

            <NavigationBar></NavigationBar>

            <h2>
                Movies
            </h2>
            {data && data.map(data1 => {
                <Card src={data1.posterurl} title={data1.title}/>
            })}

        </>
    );

}

export default Home;