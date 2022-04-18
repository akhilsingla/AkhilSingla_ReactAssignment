import React from "react";

const Card = (props) => {
    return (
        <>
            <div>
                <img src= {props.src}></img>
                <h3>
                    {props.title}
                </h3>
                <button value="Add To Favorite"></button>
            </div>
        </>
    )
}

export default Card;