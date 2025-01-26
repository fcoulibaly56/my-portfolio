import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'; // Pour envoyer des emails

// Initialisation de EmailJS avec ma Public Key
emailjs.init('StoyhtlOpqD-vgwZt'); // ma Public Key sur emailjs

// Styled Components
const ContactContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: #fff0f3;
  text-align: center;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #e5989b;
    border-radius: 8px;
    font-size: 1rem;
    color: #6d6875;
    transition: border-color 0.3s;

    &:focus {
      border-color: #b5838d;
      outline: none;
    }
  }

  button {
    padding: 0.75rem;
    background-color: #e5989b;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #b5838d;
    }
  }
`;

const ContactOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #6d6875;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #e5989b;
    }
  }
`;

// Framer Motion Variants
const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_up1a7rv', // mon  Service ID sur emailjs
        'template_m71fzj8', //mon tamplate id sur emailjs
        formData
      );

      toast.success('Message sent successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({ name: '', email: '', message: '' }); // Réinitialise le formulaire
    } catch (error) {
      console.error('Error:', error); // Affiche l'erreur dans la console
      toast.error('Failed to send message. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <ContactContainer id="contact">
       <motion.h2  whileHover={{ scale: 1.1, y: -1 }}
        style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#6d6875', cursor: 'pointer' }}>Get in touch</motion.h2>

      {/* Formulaire de contact */}
      <ContactForm
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your request"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </ContactForm>

      {/* Options de contact */}
      <ContactOptions>
        <a href="mailto:fantacoul259@gmail.com">You can reach me via email</a>
        <a href="https://wa.me/22365810501" target="_blank" rel="noopener noreferrer">
          Feel free to contact me on WhatsApp!
        </a>
      </ContactOptions>

      {/* Toast pour les notifications */}
      <ToastContainer />
    </ContactContainer>
  );
};

export default Contact;
