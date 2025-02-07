import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import fatoumata from '../Assets/images/fatoumata.JPG';
import upworkLogo from '../Assets/icons/upwork.png';
import fiverrLogo from '../Assets/icons/fiverr logo.png';
import peoplePerHourLogo from '../Assets/icons/peopleperhour-logo.png';

// Styles pour le conteneur du Header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #6d6875;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Styles pour le logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e5989b;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Styles pour l'animation du nom
const AnimatedName = styled(motion.div)`
  display: flex;
  gap: 0.2rem;
  cursor: pointer;
`;

// Styles pour chaque lettre du nom
const Letter = styled(motion.span)`
  display: inline-block;
`;

// Styles pour l'image de profil
const ProfileImage = styled(motion.img)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #e5989b;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

// Styles pour la navigation
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #e5989b;
    }
  }

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 1rem;
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 5px;
    z-index: 1000;

    a {
      color: black;

      &:hover {
        color: #e5989b;
      }
    }
  }
`;

// Styles pour l'icône du menu hamburger
const MenuIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Styles pour l'icône de fermeture
const CloseIcon = styled(FaTimes)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Styles pour les icônes des plateformes de freelance
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  line-height: 0;
  font-size: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Styles pour les icônes mobiles dans le menu déroulant
const MobileSocialIcons = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    line-height: 0;
    font-size: 0;

    a {
      display: block;
      margin: 0;
      padding: 0;
    }

    img {
      width: 32px;
      height: 32px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
      display: block;
    }
  }
`;

// Styles pour l'icône de téléchargement
const DownloadIcon = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    color: #e5989b;

    &::after {
      content: 'Download my CV';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: white;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 0.9rem;
      white-space: nowrap;
    }
  }
`;

// Variantes d'animation pour les icônes
const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
};

// Composant Header
const Header = () => {
  const name = 'Fatoumata';
  const letters = name.split('');
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      {/* Logo et image de profil */}
      <Logo>
        <ProfileImage
          src={fatoumata}
          alt="Fatoumata Coulibaly"
          whileHover={{ scale: 1.1 }}
        />
        <AnimatedName whileHover={{ scale: 1.1, rotate: 5 }}>
          {letters.map((letter, index) => (
            <Letter
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {letter}
            </Letter>
          ))}
        </AnimatedName>
      </Logo>

      {/* Menu de navigation et icônes pour les grands écrans */}
      <Nav $isOpen={isMenuOpen}>
        {location.pathname === '/' ? (
          <>
            <AnchorLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</AnchorLink>
            <AnchorLink href="#about" onClick={() => setIsMenuOpen(false)}>About</AnchorLink>
            <AnchorLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</AnchorLink>
            <AnchorLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</AnchorLink>
            <DownloadIcon href="/Fatoumata_CV.pdf" download>
              <FaDownload />
            </DownloadIcon>
          </>
        ) : (
          <>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </>
        )}

        {/* Icônes des plateformes de freelance pour les petits écrans */}
        <MobileSocialIcons>
          <motion.a
            href="https://www.upwork.com/freelancers/~0160e1b7b859e02fd1?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <img src={upworkLogo} alt="Upwork" />
          </motion.a>
          <motion.a
            href="https://www.fiverr.com/users/fcoulibaly56"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <img src={fiverrLogo} alt="Fiverr" />
          </motion.a>
          <motion.a
            href="https://www.peopleperhour.com/freelancer/fanta-coulibaly-web-developer-zyayanwa"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
          >
            <img src={peoplePerHourLogo} alt="PeoplePerHour" />
          </motion.a>
        </MobileSocialIcons>
      </Nav>

      {/* Icônes des plateformes de freelance pour les grands écrans */}
      <SocialIcons>
        <motion.a
          href="https://www.upwork.com/freelancers/~0160e1b7b859e02fd1?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
        >
          <img src={upworkLogo} alt="Upwork" style={{ width: '24px', height: '24px' }} />
        </motion.a>
        <motion.a
          href="https://www.fiverr.com/users/fcoulibaly56"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
        >
          <img src={fiverrLogo} alt="Fiverr" style={{ width: '24px', height: '24px' }} />
        </motion.a>
        <motion.a
          href="https://www.peopleperhour.com/freelancer/fanta-coulibaly-web-developer-zyayanwa"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
        >
          <img src={peoplePerHourLogo} alt="PeoplePerHour" style={{ width: '24px', height: '24px' }} />
        </motion.a>
      </SocialIcons>

      {/* Icône du menu hamburger ou de fermeture */}
      {isMenuOpen ? (
        <CloseIcon onClick={toggleMenu} />
      ) : (
        <MenuIcon onClick={toggleMenu} />
      )}
    </HeaderContainer>
  );
};

export default Header;