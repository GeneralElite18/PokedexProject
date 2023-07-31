import { useState, useEffect } from "react";
import "./pokedexPage.css"

function PokedexPage() {

    const [data, setData] = useState([]);

    function getPokedex(){
        const pokeAPI = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"

        fetch(pokeAPI)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setData(result.pokemon);
            console.log(result.pokemon);
        })
        .catch((err) => {
            console.log("errordge");
            console.error(err);
        })
    }
    
    useEffect(() => {
        getPokedex();
    }, []);


    function mapPokemon(){
        let newList = data.map((item, index) => {
            let newLi = <li key={index} className="pokemonHolder">
                <div>
                    <h3>{item.name} #{item.id}</h3>
                    <p>Type: {item.type.toString()}</p>
                    <p>Weaknesses: {item.weaknesses.toString()}</p>
                </div>
                <div>
                    <img src={item.img}></img>
                </div>

            </li>
            return newLi;
        });
        return newList;
    }


    return(
        <div>
            <h1>Pokedexdge</h1>
            <ul id="pokemonList">
            {mapPokemon()}
            </ul>
        </div>
    );
}

export default PokedexPage;