import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Post = (props:{id: string}) => {
    const { id } = props;
    
    return (
      <>
        <Container>
          <Row>
            <Col xs="12" md="4">1</Col>
            <Col xs="12" md="8">{id}</Col>
          </Row>
          <Row>
            <Col xs="12" md={{ span: 3, offset: 4 }}>2</Col>
          </Row>
        </Container>
      </>
    );
}