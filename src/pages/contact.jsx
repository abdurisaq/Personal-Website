import React from 'react';

function Contact() {
  const contactInfo = {
    phoneNumber: '123-456-7890',
    email: 'example@example.com',
    twitter: 'https://twitter.com/example',
    linkedIn: 'https://linkedin.com/in/example'
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Phone Number: {contactInfo.phoneNumber}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Twitter: <a href={contactInfo.twitter}>@example</a></p>
      <p>LinkedIn: <a href={contactInfo.linkedIn}>example</a></p>
    </div>
  );
}

export default Contact;