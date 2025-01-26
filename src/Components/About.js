import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


// Styled Components
const AboutContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const TextContent = styled.div`
  text-align: left;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #6d6875;
  }

  p {
    font-size: 1.2rem;
    color: #b5838d;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #6d6875;
  }
`;

const Skill = styled.div`
 margin-bottom: 1rem;

  span {
    display: block;
    font-size: 1rem;
    color: #6d6875;
    margin-bottom: 0.5rem;
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    overflow: hidden;

    .progress {
      height: 100%;
      background-color: #e5989b;
      border-radius: 5px;
      transition: width 0.3s ease, background-color 0.3s ease; /* Transition fluide */
    }

    .progress:hover {
      background-color: #b5838d; /* Changement de couleur au survol */
    }
  }
`;

// Framer Motion Variants
const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const skills = [
    { name: 'HTML & CSS', level: 98 },
    { name: 'JavaScript', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Sass', level: 75 },
    { name: 'PHP', level: 80 },
    { name: 'Frameworks (React, etc.)', level: 80 },
  ];

  return (
    <AboutContainer
      id="about"
      variants={aboutVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <AboutContent>
        
        <TextContent>
          <motion.h2  whileHover={{ scale: 1.1, y: -1 }}
  style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#6d6875', cursor: 'pointer' }}>About-me</motion.h2>
          <p>
 Hello! I'm Fatoumata Coulibaly, a computer science student with a passion for creating 
 innovative and efficient digital solutions.I'm currently learning and improving my skills 
 in technologies like React.js, JavaScript,and Frameworks.Below ,you'll find a visual representation
 of my progress in each of these areas as I continue to develop my expertise.
          </p>
          <SkillsContainer>
            <h3>My Skills</h3>
            {skills.map((skill, index) => (
              <Skill key={index}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </Skill>
            ))}
          </SkillsContainer>
        </TextContent>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;