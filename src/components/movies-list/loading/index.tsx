import { Item } from "./styles";

function Loading() {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Item key={i}>
          <div className="loading-box title" />
          <div className="loading-box p" />
          <div className="loading-box p" />
          <div className="loading-box p" />
          <div className="loading-box read-more" />
        </Item>
      ))}
    </ul>
  );
}

export default Loading;
