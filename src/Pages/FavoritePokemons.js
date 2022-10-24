import React, { useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { DataPokemonMongo } from '../Api/Conection';
import { NavbarGeneral } from '../Components/Navbar'
import '../Styles/Favorite.css'

export const FavoritePokemons = () => {

  const [url, setUrl] = useState("/api/pokemon");
  const getpokemonMongo = DataPokemonMongo(url);
  const {state, data} = getpokemonMongo;

  console.log(data)

  const navigate = useNavigate();

  
  return (
    <div>
      <header>
        <NavbarGeneral/>
      </header>
      <Container>
        {state ? (
          <div>
            No hay pokemons
          </div>
        ) : (
          <Container >
            <Row>
            {data.map((pok)=>(
              <Col xs={12} md={6} lg={6} sm={6} xl={4}>
                <Card className='card-pokemon-favorite'>
                  <Card.Header>  
                    <Row>
                      <Col>
                        <Card.Title className='text-pokemon-favorite'>
                          <h1> {pok.name}</h1>
                        </Card.Title>
                      </Col>
                      <Col className='text-center mt-2'>
                        <Button variant="dark" onClick={()=>(navigate(`/details/${pok.name}`))}> Más Detalle </Button>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                      <Card.Img src={pok.sprites.other.home.front_default} />
                      <Container className='text-center'>
                      </Container>
                      <Row >
                        <Col className='text-center px-4 py-1 mx-1 rounded' style={{ border: '1px black solid' }}>
                          <Card.Text>Altura: {pok.height}</Card.Text>
                        </Col >
                        <Col className='text-center px-4 py-1 mx-1 rounded' style={{ border: '1px black solid' }}>
                          <Card.Text>Peso: {pok.weight}</Card.Text>
                        </Col>
                      </Row>
                      <Row className='mt-2'>
                          <Col className='text-center mt-2'>
                           <h6>
                             Tipo:</h6>
                          </Col>
                        {pok.types.map((tpk)=>(
                          <Col key={tpk.type.name} className='text-center px-4 mx-1 py-1 rounded' style={{ border: '1px black solid' }} >
                              <div  className={'rounded px-4 py-1'} style={{ color: 'black' }}> {tpk.type.name}
                              </div>
                            </Col>
                          ))}
                      </Row>
                  </Card.Body>
                </Card>
              </Col>
              ))}
              </Row>
              <Container style={{ marginBottom: "1rem", marginTop: "1rem"}}>
                <Button onClick={()=>(navigate('/'))} variant="dark" style={{ width: "20em" }}>
                  Regresar
                </Button>
            </Container>
          </Container>
        )}
      </Container>  
    </div>
  )
}
