import useMovie from "../../hooks/useMovie";
import MovieItem from "./item";
import Loading from "./loading";

type props = {
  id: string;
};

function Movie({ id }: props) {
  const { data, isLoading, isError } = useMovie(id);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <div className="alert">Something went wrong!</div>}
      {!isLoading && !isError && <MovieItem item={data} />}
    </>
  );
}

export default Movie;
