//Home.js의 movies 배열의 각각의 원소에 대해 Movie함수 실행하는 컴포넌트
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, title, year, medium_cover_image, summary, genres}){
    return(
        <div className = {styles.movie}>
            <h1 className = {styles.movie__title}><Link to = {`/movie/${id}`}>{title}</Link></h1>{/*제목을 클릭하면 /movie:id url로 이동 */}
            <h3 className = {styles.movie__year}>{year}</h3>
            <img className = {styles.movie__img} src = {medium_cover_image} alt ={title}></img>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            <ul className = {styles.movie__genres}>
                {genres.map((g)=><li key ={g}>{g}</li>
                )}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired, 
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;