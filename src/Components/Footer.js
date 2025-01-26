import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin,  } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Styled Components
const FooterContainer = styled.footer`
   padding: 1rem;
  background-color: #6d6875;
  color: white;
  text-align: center;

  .location {
    font-size: 1.2rem;
    color: white;
    margin-top: 1rem;
    transition: color 0.3s ease, transform 0.3s ease; /* Transition fluide */
  }

  .location:hover {
    color: #e5989b; /* Changement de couleur au survol */
    transform: translateY(-5px); /* Déplacement vers le haut */
  }

  .copyright {
    font-size: 0.9rem;
    transition: color 0.3s ease, transform 0.3s ease; /* Transition fluide */
  }

  .copyright:hover {
    color: #e5989b; /* Changement de couleur au survol */
    transform: translateY(-5px); /* Déplacement vers le haut */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #e5989b;
    }
  }
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
};

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const Footer = () => {
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse de l\'API :', JSON.stringify(data, null, 2));// Log pour déboguer
        const { city, country } = data;
        setLocation(`Greetings to you in ${city}, ${country}! Thank you for stopping by. Let's connect!`);
      })
      .catch((error) => {
        console.error('Error retrieving location :', error);
        setLocation('Location not found');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <FooterContainer>
      <motion.p className="location" variants={textVariants} initial="hidden" animate="visible">
        {isLoading ? 'location loading...' : location}
      </motion.p>
      <p className="copyright">&copy; 2025 Fatoumata Coulibaly.All rights reserved .</p>
      <SocialIcons>
        <motion.a href="https://www.instagram.com/gogo3_0_8?igsh=b2s5N2R5b2t0ajJ0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" variants={iconVariants} whileHover="hover">
          <FaInstagram />
        </motion.a>
        <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" variants={iconVariants} whileHover="hover">
          <FaTwitter />
        </motion.a>
        <motion.a href="linkedin.com/in/fanta-coulibaly-208b62334" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" variants={iconVariants} whileHover="hover">
          <FaLinkedin />
        </motion.a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;