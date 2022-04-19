import React from "react";
import {Link} from "react-router-dom";

const createFavourite = (obj) => {
    return fetch('http://localhost:4000/favourit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    }).then(response => response.json())
}

const deleteFavourite = (id) => {
    return fetch(`http://localhost:4000/favourit/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}

const Card = ({movieCategory, movieData, isFavouriteTab, setMovies}) => {
    const movieName = movieData.title;
    const imageUrl = movieData.posterurl;

    const onClickFavBtn = () => {
        if (isFavouriteTab) {
            deleteFavourite(movieData.id)
            .then(res => {
                console.log(res);
                fetch('http://localhost:4000/favourit')
                .then(response => response.json())
                .then(data => {
                    setMovies(data)
                });
            })
            .catch(err => console.log(err));

            
        } else {
            createFavourite(movieData)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            border: "2px solid black",
            borderRadius: "5px",
            maxWidth: "204px",
        }}>
            <Link to={`/${movieCategory}/${movieName}`}>
                <img src={imageUrl} alt={`${movieName} poster`} width="200px" height="250px"/>
            </Link>
            <p>{movieName}</p>
            <button style={{
                border: "none",
                backgroundColor: "transparent",
                fontWeight: "bold",
                marginBottom: "2px"
            }}
            onClick={onClickFavBtn}
            >
                {isFavouriteTab ? 'Remove from Favourites': 'Add To My Favourites' }
            </button>
        </div>
    )
}

export default Card;