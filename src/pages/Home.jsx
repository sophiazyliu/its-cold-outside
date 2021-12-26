import React from 'react'
import {
  Row, 
  Col, 
  Container
} from 'reactstrap'
import './Home.css'
import Snowstorm from '../components/Snowstorm'
import Sleigh from '../components/Sleigh'
import Cups from '../components/Cups'
import Fireplace from '../components/Fireplace'
import Music from '../components/Music'
import VideoBg from "reactjs-videobg"
import poster from "../sleigh-bells-indoor.jpeg"
import webm from "../sleigh-bells-indoor.webm"
import video from "../sleigh-bells-indoor.mp4"


function Home() {

  return (
    <React.Fragment>
      <div class="title">
        <Row className="mt-4">
          <h1 class="mx-3" id="h1-id" style={{ textAlign: 'center' }}>it's cold outside</h1>
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
                <Snowstorm />
            </Row> 
            <Row style={{ width: "10rem"}}>
                <Fireplace />
            </Row>
            <Row style={{ width: "10rem"}}>
                <Cups />
            </Row>
            <Row style={{ width: "10rem"}}>
                <Music />
            </Row>
            <Row style={{ width: "10rem"}}>
                <Sleigh />
            </Row>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Home;