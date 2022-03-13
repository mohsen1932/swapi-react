import Character from "./item";
import { List } from "./styles";

type props = {
  items: string[];
};

function Characters({ items = [] }: props) {
  return (
    <>
      <h4>Characters:</h4>
      <List>
        {items.map((item) => (
          <Character url={item} key={item} />
        ))}
      </List>
    </>
  );
}

export default Characters;
