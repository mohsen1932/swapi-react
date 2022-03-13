import { Link } from "react-router-dom";

import { extractIDFromURL } from "../../../helpers";
import { Film } from "../../../types";
import { Item } from "./styles";

type props = {
  item: Film;
};

function MoviesListItem({ item }: props) {
  return (
    <Item>
      <Link to={`/movie/${extractIDFromURL(item.url)}`}>
        <h2>{item.title}</h2>
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
        <span className="read-more">{"See more details ->"}</span>
      </Link>
    </Item>
  );
}

export default MoviesListItem;
