import React, {useEffect, useState} from "react";
import NavigationBar from "../Components/NavigationBar";
import Card from "../Components/Card";



const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('movies-in-theaters');
    const isFavouriteTab = selectedCategory === 'favourit';
    const [searchString, setSearchString] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let fetchUrl = `http://localhost:4000/${selectedCategory}`;
        if (searchString) {
            fetchUrl = `http://localhost:4000/${selectedCategory}?title_like=${searchString}`
        }
        console.log('fetchUfrl', fetchUrl);
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            });
    }, [selectedCategory, searchString]);

    console.log(selectedCategory, searchString, movies);

    return (
        <>
            <NavigationBar selectCategory={setSelectedCategory} searchStr={setSearchString} />
            <div style={{
                margin: "0 60px"
            }}>
                <h2>
                    Movies
                </h2>
                {searchString ? <span><b>Search results for string : </b> {searchString}</span> : null}
                {movies.length !== 0 ?
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",

                }}>
                    {movies.map(data => {
                        return <Card key={data.id} movieData={data} movieCategory={selectedCategory} isFavouriteTab={isFavouriteTab} setMovies={setMovies} />
                    })}
                </div> : <div>No Movies Found......</div>
                }
            </div>


        </>
    );

}

export default Home;