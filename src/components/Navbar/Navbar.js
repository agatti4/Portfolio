import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar className="fixed-top" collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container>
          {/* <Navbar.Brand href="#/home"><img src={brand} alt="Portfolio" style={{width: "rem", height: "2rem"}} /></Navbar.Brand> */}
            <Navbar.Brand href="#/home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              <Nav>
                <Nav.Link href="#/home">Home</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
                <Nav.Link href="#/projects">Projects</Nav.Link>
                {/* <Nav.Link href="#/contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar;



// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function NavBar() {
//     return <nav className="nav">
//         {/* <Link to="/home" className="site-title">Anthony's Portfolio</Link> */}
//         <ul>
//             <CustomLink to="/home">Home</CustomLink>
//             <CustomLink to="/about">About</CustomLink>
//             <CustomLink to="/projects">Projects</CustomLink>
//             <CustomLink to="/contact">Contact</CustomLink>
//         </ul>
//     </nav>
// }

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className = {isActive ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
// }