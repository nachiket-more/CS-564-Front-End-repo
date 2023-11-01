import React from 'react';
import "../../index.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Home() {
  return (
    <Navbar fixed="top" expand="lg" className="">
      <Container>
        <Navbar.Brand id="home-link" href="/home">
          Home
        </Navbar.Brand>
        <Navbar.Brand id="search-link" href="/search">
          Search
        </Navbar.Brand>
        <Navbar.Brand id="houses-link" href="/houses">
          Houses
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
