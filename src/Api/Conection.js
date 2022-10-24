import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const AddPokemon = (data)=>{
    let datos_Pokemons=[]
    data[0].types.type.map((p)=>(datos_Pokemons.push({type:{name:p.name}})))

  axios.post("/api/pokemon", {
      _id: data[0].id,
      name: data[0].name,
      id: data[0].id,
      sprites: {
        other: {
          home: {
            front_default: data[0].front_default,
          },
        },
      },
      types:datos_Pokemons,
      height: data[0].height,
      weight: data[0].weight,
    })
}


export const DataPokemonMongo = (url)=>{
  const [pokemonData, setPokemonData] = useState({ state:true, data:null})

  useEffect(()=>{
    getDataMongo(url)
  },[url])

  const getDataMongo = (url)=>{
    setPokemonData({state:true, data:null})
    
    const api_pokemon = axios.create({baseURL:url});
    
    api_pokemon.get().then((resp)=>{
      setPokemonData({state:false, data:resp.data})
      console.log(resp.data)
  });
  }
  return pokemonData;
}