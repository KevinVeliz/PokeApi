import React, { useEffect, useState } from "react";
import { GetPokemonsApi } from "./Api/ApiPokemon";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { DetailsPokemon } from "./Components/DetailsPokemon";
import { AboutMe } from "./Pages/AboutMe";
import { FavoritePokemons } from "./Pages/FavoritePokemons";



function App() {
  return (
    <div>

    <Routes>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/favorites" element={<FavoritePokemons/>}/>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/pokemon/:namePokemons" element={<DetailsPokemon/>}></Route>
    </Routes>

    </div>
  );
}


// const [name, setName] = useState("");
  // const [algo, setAlgo] = useState("");
  // const [todo, setTodo] = useState("");
  // const [datos, setDatos] = useState();

  // let Todo ;
  // const Favorite =(e)=>{
  //   setName(e.target.value)
  //   setAlgo(e.target.value) 
  // }
  // const Favorite1 =(e)=>{
  //   setAlgo(e.target.value) 
  // }

  // Todo = {
  //   algo:algo,
  //   name:name
  // }



  // const datas = GetPokemonsApi();
  // console.log('parte dle home',datas.data)



 
  // const Save = (e) =>{
  //   e.preventDefault();
  //   const data = JSON.stringify(Todo)
  //   console.log(data)
  //   fetch("http://localhost:7000/pokemons",{
  //     method: "Post",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body:data
  //   })
  // }
  
  // let array;
  // const getPokemon = async() => {
  //   let url = 'https://pokeapi.co/api/v2/pokemon/5';
  //   const response = await fetch(url);
  //   const data =  await response.json();
  //   const nombre = data.name
  //   const altura = data.weight
  //   const img = data.sprites.front_default
  //   array={
  //     nombre:nombre,
  //     altura:altura,
  //     img:img
  //   }
  //   const datos = JSON.stringify(array)

  //   console.log(datos)
  //   fetch("http://localhost:7000/pokemons",{
  //     method: "Post",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body:datos
  //   })
  // }
export default App;
