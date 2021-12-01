import album from '../interfaces/song'
import MusicDetail from './MusicDetail'
import { Container,Row, Col, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'


const URL='https://striveschool-api.herokuapp.com/api/deezer/search?q='

const Search=()=>{
    const [query, setQuery] = useState('')
    const [music, setMusic]=useState<album[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    }
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
  
      const response = await fetch(URL + query)
  
      if (response.ok) {
        const { data } = await response.json()
        setMusic(data)
      }
    }
    
      console.log(music)
    
      return (
        <Container>
      <Row>
        <Col xs={10} md={8} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control type='search' value={query} onChange={handleChange} />
          </Form>
        </Col>
        <Col xs={10} md={8} className='mx-auto my-3'>
          <Row>
            {music.map((track) => (
              <Col xs={10} md={4} key={track.id}>
                <Link to={`details/${track.id}`}>
                  <Card>
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
export default Search