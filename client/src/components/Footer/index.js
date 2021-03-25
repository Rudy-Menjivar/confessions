import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <Navbar>
        <Navbar.Brand className="text-white" href="/">Confessions</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            Built by:
            <span> </span>
            <a className="text-white" href="https://github.com/uyennguyen30696" target="_blank" rel="noopener noreferrer">Uyen</a>
            <span>, </span>
            <a className="text-white" href="https://github.com/Rudy-Menjivar" target="_blank" rel="noopener noreferrer">Rudy</a>
            <span>, </span>
            <a className="text-white" href="https://github.com/madehopemorr" target="_blank" rel="noopener noreferrer">Madeline</a>
            <span>, </span>
            <a className="text-white" href="https://github.com/gstinsonjr42" target="_blank" rel="noopener noreferrer">Greg</a>
            <span> & </span>
            <a className="text-white" href="https://github.com/carly-jm" target="_blank" rel="noopener noreferrer">Carly</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
}

export default Footer;