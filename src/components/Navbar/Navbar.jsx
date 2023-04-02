import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import Camera from './camera-rotate-solid.svg';
import EyeSlash from './eye-slash-solid.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

export const Navbar = () => {

    const query = useStaticQuery(graphql`
        query logo {
            file(relativePath: {eq: "logo-charles-cantin-bgl.png"}) {
                childImageSharp {
                    gatsbyImageData(width: 150, placeholder: BLURRED)
                }
            }
        }   
    
    `)

    console.log(query);
    
    const logo = getImage(query.file.childImageSharp.gatsbyImageData)

    //State that allow to toggle menu when screen size decrease
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);

        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])


    return (
        <nav>
            <GatsbyImage image={logo} />
            {(toggleMenu || screenWidth > 890) && (
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
            )}

            {toggleMenu ?
                <button
                    onClick={toggleNav}
                    className="btn2"
                >
                    <img id='close-menu' src={EyeSlash} alt="eye icon" />
                </button>
                : <button
                    onClick={toggleNav}
                    className="btn1"
                >
                    <img id='open-menu' src={Camera} alt="camera icon" />
                </button>}


        </nav>
    )
}

