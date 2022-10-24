import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link, useNavigate } from 'react-router-dom';
import { GetPokemonsApi } from '../Api/ApiPokemon';

import '../Styles/CardPokemons.css'

export const CardPokemons = ({url}) => {

    const axiosElements = GetPokemonsApi(url);
    const{state,data} = axiosElements;

    const navigate = useNavigate();


    const handlePokemon =()=>{
        navigate(`/pokemon/${data.name}`)
    }


  return (

    <div>
    {state ? (
        <div>Hola</div>
    ):(
        <Card className='card-pokemon'>
            <CardHeader>
                <Card.Title className='name-pokemon'>
                <span className='id-pokemon'># {data.id}</span>  {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                </Card.Title>
            </CardHeader>
        <Card.Body>
            
            <Container>
                    <Card.Img
                        variant="top"
                        src={data.sprites.other.home.front_default}
                        />
            </Container>
            <Container className='button-pokemon text-center'>
            <Button onClick={handlePokemon} variant="dark" > Details </Button>
            </Container>
        </Card.Body>
        </Card>
    )}
    </div>
  )
}
