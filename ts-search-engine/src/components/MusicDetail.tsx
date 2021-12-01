import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Album, Artist, Search, Track } from "../interfaces/song";

const MusicDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState<Search | null>(null);

  useEffect(() => {
    getSongsById();
  }, []);
  const getSongsById = async () => {
    const URL = "https://striveschool-api.herokuapp.com/api/deezer/track/";

    const response = await fetch(URL + id);
    if (!response.ok) return;
    const data = await response.json();
    setSong(data);
  };
  return song ? (
    <Container>
      <Row>
        <Col xs={10} md={6}>
          <Card className="mt-2 mb-2">
            <Card.Img variant="top" src={song.album.cover_big} />
            <Card.Body>
              <Card.Title>{song.title}</Card.Title>
              <Card.Text>{song.artist.name}</Card.Text>
              <Card.Text>{Math.ceil(song.duration / 60)} min</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : null;
};
export default MusicDetail;
