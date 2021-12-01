import {Album ,Artist,Search,Track}from "../interfaces/song"
import MusicDetail from './MusicDetail'
import { Container,Row, Col, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'



const SearchSongs=()=>{
    const [query, setQuery] = useState('')
    const [music, setMusic]=useState<Track[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    }
    const URL='https://striveschool-api.herokuapp.com/api/deezer/search?q='

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
  
      const response = await fetch(URL + query)
      console.log(response)
      if (response.ok) {
        console.log(response)
        const { data } = await response.json()

        setMusic(data)
      }
    }
    
      
    
      return (
        <Container>
      <Row>
        <Col xs={10} md={8} className='mx-auto mt-4'>
          <Form onSubmit={handleSubmit}>
            <Form.Control type='search' value={query} onChange={handleChange} placeholder="search and type enter"/>
          </Form>
        </Col>
        <Col xs={10} md={8} className='mx-auto my-3'>
          <Row>
             {music.map((track) => (
              <Col xs={10} md={4} key={track.id}>
                <Link to={`details/${track.id}`}>
                  <Card style={{height:"350px", width: "200px"}} className="mt-2 mb-2">
                    <Card.Img variant='top' src={track.album.cover_medium} />
                    <Card.Body>
                      <Card.Title>{track.title}</Card.Title>
                      <Card.Text>{track.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))} 
          </Row>
        </Col>
      </Row>
    </Container>
      )
    }
export default SearchSongs