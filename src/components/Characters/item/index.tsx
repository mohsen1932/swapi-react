import usePeople from "../../../hooks/usePeople";
import Loading from "../loading";
import { Item } from "./styles";

type props = {
  url: string;
};

function Character({ url }: props) {
  const { data, isLoading, isError } = usePeople(url);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <li className="alert">Something webt wrong!</li>}
      {!isLoading && !isError && (
        <Item>
          <div className="avatar"></div>
          <h4>{data?.name}</h4>
          <p>
            <span>Gender: </span>
            <strong>{data?.gender}</strong>
          </p>
        </Item>
      )}
    </>
  );
}

export default Character;
