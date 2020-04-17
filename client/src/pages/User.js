import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import UserPage from "../components/UserPage";

function User(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3">
          <UserPage user={props.user} />
        </Col>
      </Row>
    </Container>
  )
}

export default User;