import React, {useEffect, useState} from "react";
import NavigationBar from "../Components/NavigationBar";
import Card from "../Components/Card";

const categoryMap = {
    'movies-in-theaters': 'Movies in theatres',
    'movies-coming': 'Coming Soon',
    'top-rated-india': 'Top rated Indian',
    'top-rated-movies': 'Top rated movies',
    'favourit': 'Favourites'
}

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('movies-in-theaters');
    const [searchString, setSearchString] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let fetchUrl = `http://localhost:4000/${selectedCategory}`;
        if (searchString) {
            fetchUrl = `http://localhost:4000/${selectedCategory}?title_like=${searchString}`
        }
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            });
    }, [selectedCategory, searchString]);

    return (
        <>
            <NavigationBar categoryClicked={category => setSelectedCategory(category)}></NavigationBar>

            <div style={{
                margin: "0 60px"
            }}>
                <h2>
                    Movies
                </h2>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",

                }}>
                    {movies.map(data => {
                        return <Card imageUrl={data.posterurl} movieName={data.title} key={data.id}
                                     movieCategory={selectedCategory}/>
                    })}
                </div>
            </div>


        </>
    );

}

export default Home;