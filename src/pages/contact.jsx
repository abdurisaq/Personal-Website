import React from 'react';

function Contact() {
  const contactInfo = {
    phoneNumber: '123-456-7890',
    email: 'mailto:abdurizaq@outlook.com',
    twitter: 'https://twitter.com/Dur1RL',
    
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Phone Number: {contactInfo.phoneNumber}</p>
      <p>Email: <a href ={contactInfo.email}>abdurizaq@outlook.com</a></p>
      <p>Twitter: <a href={contactInfo.twitter}>DuriRL</a></p>
    </div>
  );
}

export default Contact;