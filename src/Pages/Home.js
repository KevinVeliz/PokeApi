import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { GetPokemonsApi } from '../Api/ApiPokemon';
import { ListPokemons } from '../Components/ListPokemons';
import { NavbarGeneral } from '../Components/Navbar';

const Home = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const stateAxios = GetPokemonsApi(url);
    const {state , data} = stateAxios;

    

    return (
        <div>
          <header>
            <NavbarGeneral/>
          </header>

        <body>
            {state ? (

                <div> </div>
                ):(
                <Container >

                <ListPokemons results={data.results}/> 
                <Container style={{paddingBottom: "50px"}} >
                  <div className=" d-flex justify-content-center text-center">
                    <div className='button-prev'>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setUrl(data.previous)}
                    >
                      Prev
                    </Button>{' '}
                    <Button
                      onClick={() => setUrl(data.next)}
                      variant="secondary"
                      size="lg"
                      
                    >
                      Nex
                    </Button>
                    </div>
                  </div>
            </Container>
          </Container>
                )
        }
        </body>
        </div>
    )
}


export default Home;