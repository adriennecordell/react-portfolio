import React from 'react';
// import coverImage from '../../assets/';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Adrienne Cordell</h1>
      {/* <img src={coverImage} alt="mountains covered in snow"></img> */}
      {props.children}
    </header>
  );
}

export default Header;