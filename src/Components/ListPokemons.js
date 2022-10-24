import React, { useState } from 'react'
import { Button, Col, Container, Row , Form} from "react-bootstrap";
import { CardPokemons } from './CardPokemons';
import {SearchPokemon } from './SearchPokemon';

import '../Styles/ListPokemons.css'

export const ListPokemons = ({results}) => {

    const [name, setName] = useState();

    return(
        <Container>
            <Container className='Search_Pokemon'>
                <SearchPokemon/>
            </Container>
            <Row>
                {results.map((pokemon)=>(
                    <Col xs={14} md={4} sm={6} key={pokemon.name}>
                        <CardPokemons url={pokemon.url}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
