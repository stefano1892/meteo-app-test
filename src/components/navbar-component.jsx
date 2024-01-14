import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'><b>BrandName</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='nav-link-custom active-link'>Home</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Previsioni</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Situazione</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Radar</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Webcam</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Video</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>News</Nav.Link>
            <Nav.Link href="#" className='nav-link-custom'>Viabilità</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className='nav-link-custom'>Business</Nav.Link>
            <Nav.Link eventKey={2} href="#" className='nav-link-custom'>
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;