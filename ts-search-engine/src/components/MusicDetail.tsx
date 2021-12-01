import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row, Col, Image } from "react-bootstrap"
import album from "../interfaces/song"
const MusicDetail=()=>{
    const [song, setSong] = useState<album | null>(null)

return(
    <Container>
    <Row>
      <Col xs={10}>
       <img src={song.album.picture_small } alt="" />
        <h4> song.title </h4>
        <h6> song.artist.name </h6>
      </Col>
    </Row>
  </Container>
)
}
export default MusicDetail