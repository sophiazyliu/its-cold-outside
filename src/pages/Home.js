import React from 'react';
import {
  Row, 
  Col, 
  Container, 
  Card, 
  CardTitle
} from 'reactstrap';
import './Home.css';
import VideoBg from "reactjs-videobg";
import poster from "../sleigh-bells-indoor.jpeg";
import webm from "../sleigh-bells-indoor.webm";
import video from "../sleigh-bells-indoor.mp4";

const Home = props => {
  return (
    <React.Fragment>
      <div class="title">
        <Row className="mt-4">
          <h1 class="mx-3" id="h1-id">sleigh bells</h1>
        </Row>
      </div>
      <div>
        <VideoBg poster={poster}>
        <VideoBg.Source src={webm} type="video/webm" />
        <VideoBg.Source src={video} type="video/mp4" />
        </VideoBg>
      </div>
      <br/>
      <div className="contained">
        <Container>
        <Col>
            <Row style={{ width: "10rem"}}>
                <Card className="shadow border-0 card p-2 my-1" style={{ backgroundColor: 'beige', color: 'black' }}>
                <CardTitle tag="h7" id="h1-id">snowstorm</CardTitle>
                </Card>
            </Row> 
            <Row style={{ width: "10rem"}}>
                <Card className="shadow border-0 card p-2 my-1" style={{ backgroundColor: 'beige', color: 'black' }}>
                <CardTitle tag="h7" id="h1-id">fireplace</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card className="shadow border-0 card p-2 my-1" style={{ backgroundColor: 'beige', color: 'black' }}>
                <CardTitle tag="h7" id="h1-id">cups clinking</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card className="shadow border-0 card p-2 my-1" style={{ backgroundColor: 'beige', color: 'black' }}>
                <CardTitle tag="h7" id="h1-id">music box</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card className="shadow border-0 card p-2 my-0" style={{ backgroundColor: 'beige', color: 'black' }}>
                <CardTitle tag="h7" id="h1-id">sleigh bells</CardTitle>
                </Card>
            </Row>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Home;