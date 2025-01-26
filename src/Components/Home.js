
import { motion } from 'framer-motion';
import styled from 'styled-components';
import fatoumata from '../Assets/images/fatoumata.JPG'; // Assure-toi que le chemin est correct
import About from './About'; // Importe le composant About
import Projects from './Projects'; // Importe le composant Projects
import Contact from './Contact'; // Importe le composant Contact

// Styled Components
const HomeContainer = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f3f3; /* Couleur de fond douce */
  text-align: center;
  padding: 2rem;
`;

const HomeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #6d6875; /* Couleur de texte sophistiquée */
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    color: #b5838d; /* Couleur de texte douce */
    margin-bottom: 2rem;
  }

  

  a {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: #e5989b; /* Couleur de bouton douce */
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #b5838d; /* Couleur de bouton au survol */
    }
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid #e5989b; /* Couleur de bordure douce */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
};

const Home = () => {

  return (
    <>
      {/* Section Accueil */}
      <HomeContainer
        id="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HomeContent>
          <ProfileImage
            src={fatoumata}
            alt="Fatoumata Coulibaly"
            whileHover={{ scale: 1.05 }}
          />
           <motion.h2  whileHover={{ scale: 1.1, y: -1 }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#6d6875', cursor: 'pointer' }}>Welcome to my Portfolio!</motion.h2>
          <motion.p variants={textVariants} initial="hidden" animate="visible">
             Here,you'll find the projects I've built, showcasing my expertise in modern 
             web development.
             Let's bring ideas to life
          </motion.p>
          <motion.a
            href="#projects"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            See my projects
          </motion.a>
          
        </HomeContent>
      </HomeContainer>

      {/* Section À propos */}
      <About />

      {/* Section Projets */}
      <Projects />

      {/* Section Contact */}
      <Contact />
    </>
  );
};

export default Home;