import Search from "./components/search/Search";

const App = () => {
  const handleOnSearchChange = (search: string) => {
    console.log(search);
  };
  return (
    <div className="bg-zinc-900 min-h-screen p-4">
      <div className="px-8">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
};

export default App;
