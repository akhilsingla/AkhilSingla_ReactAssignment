import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const MovieDetail = () => {
    const {movieCategory, movieName} = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/${movieCategory}?title=${movieName}`)
            .then(response => response.json())
            .then(data => setMovieDetail(data[0]));
    }, []);

    console.log('Movie', movieDetail);

    return (
        <>
            <Link to={`/`}>
                Back to Home
            </Link>
            Hello Detail

            <img src={movieDetail.posterurl} alt={`${movieDetail.title} poster`}/>
        </>
    );

}

export default MovieDetail;