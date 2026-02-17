import { Input } from "../ui/input";
import { useMemo, useState } from "react";
import debounce from "lodash.debounce";

interface SearchProps {
  onSearchChange: (search: string) => void;
}

const Search = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState("");

  const debouncedOnSearchChange = useMemo(
    () =>
      debounce((search: string) => {
        onSearchChange(search);
      }, 400),
    [onSearchChange],
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      debouncedOnSearchChange.cancel();

      onSearchChange("");
      return;
    }

    debouncedOnSearchChange(e.target.value);
  };

  return (
    <>
      <Input value={search} onChange={handleOnChange} />
    </>
  );
};

export default Search;
