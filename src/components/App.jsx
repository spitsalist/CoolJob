import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Partners from "../components/Partners/Partners";
import Categories from "../components/Categories/Categories";
import Jobs from "../components/Jobs/Jobs";
import Futter from "../components/Futter/Futter";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Partners />
      <Categories />
      <Jobs />
      <Futter />
    </div>
  );
}

export default App;
