import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Main = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`)
      .then((response) => response.json())
      .then((json) => setGifs(json.data))
      .catch((error) => console.log(error));
  }, [search, api_key]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <h1 className="text-center">Gifs!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="inputForm">
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={search}
            type="search"
            placeholder="Buscar gif"
          />
          {search && <h2>Estamos buscando: {search}</h2>}
        </Form.Group>
      </Form>
      <h2 className="text-center">Resultados</h2>
      {gifs.map((gif) => (
        <img key={gif.id} alt={gif.title} src={gif.images.original.url} />
      ))}
    </Container>
  );
};

export default Main;
