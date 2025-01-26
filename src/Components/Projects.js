import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import project2 from '../Assets/images/project2.jpg';
import project1 from '../Assets/images/project1.jpg';
import project3 from '../Assets/images/project3.jpg';

// Styles avec styled-components
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #6d6875;
`;

const ProjectDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

// Composant Projects
const Projects = () => {
  const location = useLocation();

  // Données des projets
  const projects = [
    {
      id: 1,
      image: project2,
      title: 'Project 1: Calculator',
      description: 'A simple tip calculator.',
      path: '/tip-calculator',
    },
    {
      id: 2,
      image: project1,
      title: 'Project2 : Ludo game',
      description: 'A ludo game with React.js',
      path: '/ludo',
    },
    {
      id: 3,
    image: project3, 
    title: 'To-Do List',
    description: 'A simple to-do list built with React.',
    path: '/todo',

    },
  ];

  return (
    <div key={location.pathname}> {/* Clé unique basée sur l'URL */}
      {/* Titre de la section Projects */}
      <motion.h2  whileHover={{ scale: 1.1, y: -1 }}
  style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#6d6875', cursor: 'pointer', textAlign:'center' }}>My Projects</motion.h2>

      {/* Conteneur des projets */}
      <ProjectsContainer id="projects">
        {projects.map((project) => (
          <Link to={project.path} key={project.id} style={{ textDecoration: 'none' }}>
            <ProjectCard>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          </Link>
        ))}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;