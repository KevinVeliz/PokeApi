import axios from "axios";
import  { useEffect, useState } from "react"

/**
 * It's a custom hook that fetches data from an API and returns the data in an object.
 * @param url - The url to fetch the data from.
 * @returns {state:true}
 */
export const GetPokemonsApi = (url) => {
    const [pokemonData, setPokemonData] = useState({state:true})

    useEffect(() => {
        getPokemonData(url)
    }, [url])

    const getPokemonData = (url) => {
        setPokemonData({state:true });
        const pokemonApi = axios.create({ 
            baseURL: url,
        });
        
        pokemonApi
            .get()
            .then((resp) => {
                setPokemonData({state:false, data: resp.data });
        })
    }
    return pokemonData;
}



export const GetDetailsPokemon = (namePokemon) =>{

    const [detailPokemon, setDetailPokemon] = useState({ state:true, data:null});

    useEffect(()=>{
     getPokemonDetail(namePokemon);
    },[namePokemon])


    const getPokemonDetail =(namePokemon)=>{
        console.log('asdasd',namePokemon)
         setDetailPokemon({ state:true , data:null});

        const pokemonApi_detail = axios.create({ 
            baseURL: `https://pokeapi.co/api/v2/pokemon/${namePokemon}`,
        });

        pokemonApi_detail
            .get()
            .then((resp) => {
                setDetailPokemon({state:false, data:resp.data});
                console.log(resp.data)   
        })
    }
    return detailPokemon;
}

