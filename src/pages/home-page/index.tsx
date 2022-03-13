import { useState } from "react";

import Search from "../../components/search";
import useMoviesList from "../../hooks/useMoviesList";
import MoviesList from "../../components/movies-list";
import { Film } from "../../types";

function HomePage() {
  const { data, isLoading, isError } = useMoviesList();
  const [list, setList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleChange = (query: string) => {
    if (query === "") {
      setList([]);
      setIsFiltered(false);
    } else {
      const filtered = data.filter((item: Film) =>
        item.title.toLowerCase().includes(query)
      );
      setList(filtered);
      setIsFiltered(true);
    }
  };

  return (
    <>
      <h1>Search Star Wars Movies</h1>
      <Search handler={handleChange} isdisabled={isLoading} />
      <MoviesList
        isFiltered={isFiltered}
        items={isFiltered ? list : data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default HomePage;
