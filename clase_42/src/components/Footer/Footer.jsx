import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from './Footer.module.css'

const Footer = () => {
  return (
      <Row>
        <Col sm={12} md={4} className={styles.bgBlue}>
          <h1>Columna 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col sm={12} md={4} className={styles.bgRed}>
          <h1>Columna 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col sm={12} md={4} className={styles.bgGreen}>
          <h1>Columna 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
      </Row>
  );
};

export default Footer;
