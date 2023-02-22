import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const style = {
  header: {
    backgroundColor: "red",
  },
  h1: {
    color: "black",
  },
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={style.header}>
      <h1 style={style.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
