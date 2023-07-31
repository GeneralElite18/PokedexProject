import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, PokedexPage } from "./pages";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink className={"navLink"} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to={"/pokedex"}>Pokedex</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/pokedex' element={<PokedexPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
