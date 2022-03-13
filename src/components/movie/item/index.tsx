import Characters from "../../Characters";
import { Film } from "../../../types";

type props = {
  item: Film;
};

function MovieItem({ item }: props) {
  return (
    <>
      <h1>{item?.title}</h1>
      <p>
        <span>Release Date: </span>
        <strong>{item?.release_date}</strong>
      </p>
      <p>
        <span>Director: </span>
        <strong>{item?.director}</strong>
      </p>
      <p>
        <span>Producer: </span>
        <strong>{item?.producer}</strong>
      </p>
      <p dangerouslySetInnerHTML={{ __html: item?.opening_crawl }} />
      {item?.characters.length > 0 && <Characters items={item?.characters} />}
    </>
  );
}

export default MovieItem;
