import React, {useState} from "react"
import {
  Row, 
  Col, 
  Container,
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap'
import DarkModeToggle from "react-dark-mode-toggle"
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
import posterDark from "../dark-mode.jpeg"
import webmDark from "../dark-mode.webm"
import videoDark from "../dark-mode.mp4"
import pop from '../00-rising-pops.mp3'

export default () => {
  const [play, { stop }] = useSound(pop);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <React.Fragment>
      { isDarkMode &&
      <div>
        <VideoBg poster={posterDark}>
        <VideoBg.Source src={webmDark} type="video/webm" />
        <VideoBg.Source src={videoDark} type="video/mp4" />
        </VideoBg>
      </div>}
      { !isDarkMode && 
      <div>
        <VideoBg poster={poster}>
        <VideoBg.Source src={webm} type="video/webm" />
        <VideoBg.Source src={video} type="video/mp4" />
        </VideoBg>
      </div>
      }
      
      <div className="cont">
        <Container>
        <Row>
        <Col>
        <div style={{ height: '18px' }} />
          <Row style={{ width: "10rem" }}>
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
            hover near animated elements for sounds
          </CardText>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />         
          </Card>
          
          </Row>
          <div style={{ height: '80px' }} />
            <Row style={{ width: "7rem" }}>
                <Snowstorm />
            </Row>
            <div style={{ height: '240px' }} />
            {/* <Card 
              className="shadow border-0 card p-3 my-0" 
              style={{ backgroundColor: 'beige', color: 'black' }}
              onMouseEnter={() => play()} 
              onMouseLeave={() => stop()}
            >
              <CardBody>
                <CardText>Sophia and Amy Liu</CardText> */}
                {/* <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={120}
                /> */}
              {/* </CardBody>
          </Card> */}
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
