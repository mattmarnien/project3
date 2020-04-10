import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import UserPage from "../components/UserPage";

function User() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3">
          <UserPage />
        </Col>
      </Row>
    </Container>
  )
}

export default User;