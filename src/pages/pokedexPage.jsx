import { useState, useEffect } from "react";
import { getTypes, filterByType, filterByWeakness } from "../Filters/filters";
import "./pokedexPage.css"

function PokedexPage() {

    const [data, setData] = useState([]);
    const [type, setType] = useState("");
    const [weakness, setWeakness] = useState("");

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
        let newList = filteredByWeaknessList.map((item, index) => {
            let newLi = <li key={index} className="pokemonHolder">
                <div>
                    <h2>{item.name} #{item.id}</h2>
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

    const types = getTypes(data, "type");
    const filteredByTypesList = filterByType(data, type);
    const filteredByWeaknessList = filterByWeakness(filteredByTypesList, weakness);

    return(
        <div>
            <h1>Pokedex</h1>
            <div className="FilterSection">
                <h2>Sort By</h2>
                <div className="filter">
                    <label htmlFor="typeFilter">Type:</label>
                    <select id="typeFilter" 
                    value={type}
                    onChange={((element) => setType(element.target.value))}
                    >
                        <option value="">All</option>
                        {types.map((type) => {
                            return <option value={type}>{type}</option>
                        })}
                    </select>
                </div>
                <div className="filter">
                    <label htmlFor="weaknessFilter">Weakness:</label>
                    <select id="weaknessFilter" 
                    value={weakness}
                    onChange={((element) => setWeakness(element.target.value))}
                    >
                        <option value="">All</option>
                        {types.map((type) => {
                            return <option value={type}>{type}</option>
                        })}
                    </select>
                </div>

            </div>
            <ul id="pokemonList">
            {mapPokemon()}
            </ul>
        </div>
    );
}

export default PokedexPage;