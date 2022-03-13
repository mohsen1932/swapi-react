import MoviesListItem from "./item";
import Loading from "./loading";
import { Film } from "../../types";

type props = {
  items: Film[];
  isFiltered?: boolean;
  isLoading?: boolean;
  isError?: boolean;
};

function MoviesList({
  items = [],
  isFiltered = false,
  isLoading = false,
  isError = false,
}: props) {
  return (
    <>
      {isLoading && <Loading />}
      {isError && <div className="alert">Something went wrong!</div>}
      {isFiltered && items.length === 0 && (
        <div className="alert">There is no movie with this keyword!</div>
      )}
      {!isLoading && !isError && (
        <ul>
          {items.map((item) => (
            <MoviesListItem item={item} key={item.episode_id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesList;
