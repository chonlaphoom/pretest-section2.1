
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
      <Container className="test-container">
        <Row>
          <Col style={{width:'200px'}}>
            col1
          </Col>
          <Col style={{minWidth:'100px'}}>
            col2
          </Col>
          <Col style={{width:'600px'}}>
            col3
          </Col>
    </Row></Container>)
}

export default Header;