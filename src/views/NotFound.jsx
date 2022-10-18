import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      <img src="https://media.tenor.com/KvQWsHSsiMwAAAAC/sad-pepe.gif" alt="" />
      <h2>intenta mas tarde o prueba otra ruta</h2>
    </Container>
  );
};
