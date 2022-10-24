import React, { useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Tab, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate, useParams } from 'react-router-dom'
import { GetDetailsPokemon } from '../Api/ApiPokemon';
import { AddPokemon } from '../Api/Conection';

import '../Styles/DetailPokemon.css'
import { NavbarGeneral } from './Navbar';

export const DetailsPokemon = () => {
    
    const [favoritePokemon, setFavoritePokemon] = useState();
    const {namePokemons} = useParams();
    const detailPokemon = GetDetailsPokemon(namePokemons);
    const { state, data } = detailPokemon;
    

    const navigate = useNavigate();
    
    const handleBack = () =>{
        navigate('/')
    }

    const favorite_Pokemon = async ()=>{
        let types_pokemons=[
            data.types.map((e)=>({
                name: e.type.name
            }))
        ];

        console.log(types_pokemons)

        let pokemon_data =[
            {
            _id: data.id,
            name: data.name,
            id: data.id,
            front_default: data.sprites.other.home.front_default,
            height: data.height,
            weight: data.weight,
            types: {
              type: types_pokemons[0],
            },
            }

        ]
        await AddPokemon(pokemon_data)

        console.log(pokemon_data)
    }


    const addFavorite = () =>{
        if(!favorite_Pokemon()){
            setFavoritePokemon(true);
            console.log(favoritePokemon);
        }else{
            setFavoritePokemon(false);
            console.log(favoritePokemon);
        }
    }


  return (
    <div>
            <NavbarGeneral/>
    
        <Container>
            {state ? (
                <h1> Pokemon down!! </h1>
                
            ):(
                <Container>
                        <Row>
                            <Col  xs={12} md={12} lg={12} sm={12} xl={12}>
                                <Card className="text-center rounded my-3 p-3 shadow p-3 mb-5 bg-white">
                                    <Card.Body>
                                        <Card.Title className='rounded'>
                                        <h1> <span className='id-pokemon'># {data.id}</span> {data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
                                        </Card.Title>
                                        <Button variant="dark" onClick={()=>addFavorite()}> AÑADIR A FAVORITO </Button>
                                        <Col xs={12} md={12} sm={12}>
                                            <Card.Img 
                                                style={{width:'25rem'}}
                                                src={data.sprites.other.home.front_default}
                                                />
                                        </Col>
                                    </Card.Body>
                                </Card>

                                {/* <CardHeader>
                                    <Card.Title>
                                    <h1> <span className='id-pokemon'>{data.id}</span> {data.name}</h1>
                                    </Card.Title>
                                </CardHeader> */}
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <Card.Title className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>
                                                Tipo
                                            </Card.Title>
                                            <Row>
                                            {data.types.map((p) => (
                                                <Col key={p.type.name}>
                                                    <div  className={'rounded px-4 py-1'} style={{ color: 'black' }}> 
                                                        {p.type.name.toUpperCase()}
                                                    </div>
                                                </Col>
                                            ))}
                                            </Row>
                                            <Row className='mt-4'>
                                                <Col>
                                                    <Card.Text className='px-4 py-1 rounded' style={{ border: '1px black solid' }}> Altura </Card.Text>
                                                    <Card.Text> {data.height} </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='px-4 py-1 rounded' style={{ border: '1px black solid' }}> Peso </Card.Text>
                                                    <Card.Text> {data.weight} </Card.Text>
                                                </Col>
                                            </Row>
                                            <Row className='mt-5'>
                                            <Card.Title className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>
                                                Estadísticas
                                            </Card.Title>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                {data.stats.map((pokemon)=>(
                                                    <div>
                                                      <strong className='text-end text-capitalize'>  {pokemon.stat.name} </strong> : {pokemon.base_stat}
                                                    </div>

                                                ))}
                                              
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                                <Button variant="dark" className='mb-5' onClick={handleBack}> Regresar </Button>
                                
                       

                            </Row>

                </Container>
                
            )}
        </Container>

    </div>
  )
}
