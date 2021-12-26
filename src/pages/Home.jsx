import React from 'react'
import {
  Row, 
  Col, 
  Container,
  Card,
  CardTitle,
  CardText
} from 'reactstrap'
import './Home.css'
import useSound from 'use-sound'
import Snowstorm from '../components/Snowstorm'
import Lights from '../components/Lights'
import Fireplace from '../components/Fireplace'
import Star from '../components/Star'
import Stocking from '../components/Stocking'
import Cat from '../components/Cat'
import VideoBg from "reactjs-videobg"
import poster from "../sleigh-bells-indoor.jpeg"
import webm from "../sleigh-bells-indoor.webm"
import video from "../sleigh-bells-indoor.mp4"
import pop from '../00-rising-pops.mp3'

function Home() {
  const [play, { stop }] = useSound(pop);

  return (
    <React.Fragment>
      <div>
        <VideoBg poster={poster}>
        <VideoBg.Source src={webm} type="video/webm" />
        <VideoBg.Source src={video} type="video/mp4" />
        </VideoBg>
      </div>
      <div>        
        <Container>
        <Row>
        <Col>
        <div style={{ height: '18px' }} />
          <Row style={{ width: "8rem" }}>
          <Card 
              className="shadow border-0 card p-3 my-1" 
              style={{ backgroundColor: 'beige', color: 'black' }}
              onMouseEnter={() => play()} 
              onMouseLeave={() => stop()}
              >                 
          <CardTitle tag="h5" id="h1-id">
              it's cold outside
          </CardTitle>
          <CardText style={{ fontSize: '70%', color: 'dimgray' }}>
            tap here to begin exploring
          </CardText>
          </Card>
          </Row>
          <div style={{ height: '80px' }} />
            <Row style={{ width: "7rem" }}>
                <Snowstorm />
            </Row>
            <div style={{ height: '280px' }} />
          </Col>
          <Col>
          <div style={{ height: '80px' }} />
            <Row style={{ width: "5rem" }}>
                <Lights />
            </Row> 
          </Col>
          <Col>                
          </Col>
          <Col>
            <div style={{ height: '490px' }} />
            <Row style={{ width: "7rem" }}>
                <Fireplace />
            </Row>
            <Row style={{ width: "3rem" }}>
                <Cat />
            </Row>
          </Col>
          <Col>
            <div style={{ height: '390px' }} />
            <Row style={{ width: "8rem" }}>
                <Stocking />
            </Row>
          </Col>
          <Col>
            <div style={{ height: '250px' }} />
            <Row style={{ width: "7rem", paddingLeft: '48px' }}>
                <Star />
            </Row>
          </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Home;