import React from "react";
import {Link} from "react-router-dom";

const Card = ({movieCategory, imageUrl, movieName}) => {
    console.log('Props', movieCategory, imageUrl, movieName);
    return (
        <>
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
                }}>Add To My Favorite
                </button>
            </div>
        </>
    )
}

export default Card;