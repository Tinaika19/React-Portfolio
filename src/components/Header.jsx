import React from 'react';

function Header() {
  return (
    <header>
      <h1>Tinaika Pereira</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="./src/styles/TINAIKA RESUME.pdf" download>Resume</a> {/* Updated link */}
      </nav>
    </header>
  );
}

export default Header;
