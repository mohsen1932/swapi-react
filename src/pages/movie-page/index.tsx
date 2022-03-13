import { useParams, Link } from "react-router-dom";

import Movie from "../../components/movie";
import MovieItem from "../../components/movie/item";
import { queryClient } from "../../services";
import { Film } from "../../types";

function MoviePage() {
  const { id } = useParams();
  const renderMovieDetails = () => {
    // if we have the movies list in react-query cache:
    // use the cached data and pass it to MovieItem component
    const list: Film[] | undefined = queryClient.getQueryData("list");
    if (list && list.length > 0) {
      const movie = list.filter(
        (item: Film) => item.url === `https://swapi.dev/api/films/${id}/`
      )[0];
      return <MovieItem item={movie} />;
    } else {
      // else: use Movie component to fetch data from Api
      return id && <Movie id={id} />;
    }
  };

  return (
    <>
      <Link to="/">{"<- Back to the list"}</Link>
      {renderMovieDetails()}
    </>
  );
}

export default MoviePage;
