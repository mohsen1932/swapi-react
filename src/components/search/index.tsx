import { Input } from "./styles";

type props = {
  isdisabled?: boolean;
  handler: (query: string) => void;
};

function Search({ handler, isdisabled = false }: props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    handler(query);
  };

  return (
    <Input
      type="text"
      placeholder="Search..."
      onChange={(e) => handleChange(e)}
      disabled={isdisabled}
    />
  );
}

export default Search;
