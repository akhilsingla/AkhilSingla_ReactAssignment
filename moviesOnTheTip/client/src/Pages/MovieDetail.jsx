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

    const formatCotent = (arr) =>
    {
        return arr.reduce((prv, nxt) => {
            return prv + ", " + nxt;
        })
    }

    return (
        <>
            <div>
            <Link to={`/`}>
                Back to Home
            </Link>
            </div>
            <br/>
            <img src={movieDetail.posterurl} alt={`${movieDetail.title} poster`}/>
            <div>
                <h2>{movieDetail.title}</h2>
            </div>
            <table>
                <tr>
                    <td width="20%">Imdb Rating</td>
                    <td align={"left"}>{movieDetail.imdbRating} </td>
                </tr>
                <tr>
                    <td width="20%">Content Rating</td>
                    <td align={"left"}>{movieDetail.contentRating} </td>
                </tr>
                <tr>
                    <td width="20%">Average Rating</td>
                    <td align={"left"}>{movieDetail.averageRating} </td>
                </tr>
                <tr>
                    <td width="20%">Duration</td>
                    <td align={"left"}>{movieDetail.duration} </td>
                </tr>
                <tr>
                    <td width="20%">Genres</td>
                    {/*<td align={"left"}>{formatCotent(movieDetail.genres)}</td>*/}
                    <td align={"left"}>{movieDetail.genres}</td>
                </tr>
                <tr>
                    <td width="20%">Actors</td>
                    {/*<td align={"left"}>{formatCotent(movieDetail.actors)}</td>*/}
                    <td align={"left"}>{movieDetail.actors}</td>
                </tr>
                <tr>
                    <td width="20%">Release Date</td>
                    <td align={"left"}>{movieDetail.releaseDate} </td>
                </tr>
                <tr>
                    <td width="20%">Story Line</td>
                    <td align={"left"}>{movieDetail.storyline} </td>
                </tr>
            </table>
        </>
    );

}

export default MovieDetail;