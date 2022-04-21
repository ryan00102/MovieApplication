import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(details);
  return(
      <div>
          <h1>{details.title_long}</h1>
          <h2>Rating : {details.rating}</h2>
          <img src = {details.medium_cover_image} alt ={details.title}></img>
          {/*<ul>{details.genres.map((g)=><li key ={g}>{g}</li>)}
          </ul>*/}
          <div>Downloaded : {details.download_count}</div>
          <div>Like : {details.like_count}</div>
          <p>{details.description_full}</p>
      </div>
  )
}
export default Detail;