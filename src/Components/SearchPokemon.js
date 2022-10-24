import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


export const SearchPokemon = () => {

  const navigate = useNavigate();
  const [name, setName] = useState();


  const handleSearch=()=>{
    navigate(`/pokemon/${name}`)
  }

  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <Button variant="dark" onClick={handleSearch}>Search</Button>
  </Form>
  )
}
