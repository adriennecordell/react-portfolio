import React from 'react';
import Nav from '../Nav'

function About() {
  return (
    <section>
      <Nav></Nav>
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        Hello my name is Adrienne Cordell, I am currently in a Full-Stack coding bootcamp at the University of Wisconsin!
        </p>
        <p>
        I work with JavaScript, CSS, Node.js, React, and more!
        </p>
    </section>
  );
}

export default About;