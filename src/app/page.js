"use client";
import Image from "next/image";
import wave from './assets/wave.png';
import { useState } from 'react';

export default function Home() {
  return (
    null
  );
}


export const Footbar = () => {
  return (
    <footer>
      <div className="waves">
        <Image className="wave" id="wave1" src={wave} alt="Wave 1" />
        <Image className="wave" id="wave2" src={wave} alt="Wave 2" />
        <Image className="wave" id="wave3" src={wave} alt="Wave 3" />
        <Image className="wave" id="wave4" src={wave} alt="Wave 4" />
      </div>
      <ul className="social">
        <li><a href="https://wa.me/3921075985"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        <li><a href="https://www.linkedin.com/in/emiliano-avvisato-4a9a001b1/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href="https://github.com/Emi-02"><ion-icon name="logo-github"></ion-icon></a></li>
      </ul>
      <ul className="menu-footer">
        <li><a href="#home">Home</a></li>
        <li><a href="#am">About</a></li>
        <li><a href="#proj">Projects</a></li>
        <li><a href="#cont">Contact</a></li>
      </ul>
    </footer>
  )
}

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link"><a className="ac"href="#home">
        <ion-icon name="home-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Home</p></a></li>
        <li className="nav-link"><a href="#am">
        <ion-icon name="accessibility-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| About me</p></a></li>
        <li className="nav-link"><a href="#proj">
        <ion-icon name="terminal-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Projects</p></a></li>
        <li className="nav-link"><a href="#cont">
        <ion-icon name="paper-plane-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Contact me</p></a></li>
      </ul>
    </nav>
  )
}

export const ContactForm = () => {
const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.msg || formData.message,
        }),
      });

      if (response.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', msg: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Failed to send'}`);
      }
    } catch (error) {
      setStatus('Network error.');
    }
  };
  return (
<div className="inputs-con">
  <form id="form" className="input" onSubmit={handleSubmit}>
    <input 
      id="name" 
      type="text" 
      placeholder="Your name" 
      name="name" 
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input 
      id="mail" 
      type="email" 
      placeholder="Your mail" 
      name="email" 
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input 
      id="message" 
      type="text" 
      placeholder="Message" 
      name="msg" 
      value={formData.msg}
      onChange={handleChange}
      required
    />
    
    <button className="send" id="send" type="submit">Send message</button>
    {status && <p style={{ marginTop: '10px', fontSize: '14px', color: status.includes('Error') ? 'red' : 'green' }}>{status}</p>}
  </form>
</div>
  )
}