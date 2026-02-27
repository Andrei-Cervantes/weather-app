import { Input } from "../ui/input";
import { useMemo, useState, useEffect, type ReactNode } from "react";
import debounce from "lodash.debounce";

interface SearchWithSuggestionsProps<T> {
  onSearch: (value: string) => void;
  onSelect?: (item: T) => void;
  suggestions: T[];
  isLoading?: boolean;
  renderSuggestion: (item: T) => ReactNode;
  getSuggestionValue: (item: T) => string;
  placeholder?: string;
}

const SearchWithSuggestions = <T,>({
  onSearch,
  onSelect,
  suggestions,
  isLoading,
  renderSuggestion,
  getSuggestionValue,
  placeholder = "Search...",
}: SearchWithSuggestionsProps<T>) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        if (val.trim()) {
          onSearch(val);
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }, 400),
    [onSearch],
  );

  // cancel debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (val: string) => {
    setValue(val);
    debouncedSearch(val);
  };

  const handleClickItem = (item: T) => {
    const value = getSuggestionValue(item);

    setValue(value);
    onSearch(value);
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-100">
      <Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-black"
      />

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-800 mt-2 rounded shadow-lg">
          {isLoading && <div className="p-2">Loading...</div>}

          {!isLoading &&
            suggestions.map((item, index) => (
              <div
                key={index}
                className="p-3 hover:bg-zinc-700 cursor-pointer"
                onClick={() => handleClickItem(item)}
              >
                {renderSuggestion(item)}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
