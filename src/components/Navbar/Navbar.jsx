import React from 'react';
import '../../styles/navbar.css';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap'

export const Header = () => {


    return (
        <Navbar expand="lg" className='nav'>
            <Container>
                <Navbar.Brand>
                    <img className='logo' src="/images/logo-charles-cantin-bgl.svg" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <ul className='navbar-list'>

                            <li>
                                <Link to='/'>Accueil</Link>
                            </li>
                            <li>
                                <Link to='/gallery'>Galerie</Link>
                            </li>
                            <li>
                                <Link to='/pricing'>Tarifs et Prestations</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/facebook.svg" alt="logo facebook" />
                                </a>
                                <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/instagram.svg" alt="logo instagram" />
                                </a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>


            </Container>


        </Navbar>
    )
}


