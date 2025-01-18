import { useState } from "react";
import "./App.css";
import { CardsList } from "./components/cards-list/cards-list";
import { Header } from "./components/header/header";
import { FavouritesList } from "./components/favorites-list/favourites-list";

function App() {
  const [page, setPage] = useState<'all' | 'favourites'>('all');
  const handleChangePage = (page: 'all' | 'favourites') => {
    setPage(page);
  }
  console.log(page);
  return (
    <div className="">
      <Header isActive={page} onClick={handleChangePage}/>
      {page === 'all' && <CardsList />}
      {page === 'favourites' && <h1><FavouritesList /></h1>}
    </div>
  );
}

export default App;
