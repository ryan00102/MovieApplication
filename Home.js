//사이트로부터 영화정보를 받고 movies 배열의 각각의 원소에 각 영화들의 정보를 담는 컴포넌트
import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    },[]);
    return(
        <div className = {styles.container}>
            {loading ? <div className = {styles.loader}><span>Loading...</span></div> : <div className={styles.movies}>{movies.map((movie) => 
            <Movie medium_cover_image = {movie.medium_cover_image} 
            id = {movie.id}
            key = {movie.id}
            title = {movie.title} 
            year = {movie.year}
            summary = {movie.summary} 
            genres = {movie.genres}
            />
                
            )}</div>}
        </div>
    )
}

export default Home;
