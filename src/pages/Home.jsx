import React from 'react'
import {
  Row, 
  Col, 
  Container, 
  Card, 
  CardTitle,
  Button,
  CardBody
} from 'reactstrap'
import './Home.css'
// import Checkbox from '../Checkbox'
import VideoBg from "reactjs-videobg"
import poster from "../sleigh-bells-indoor.jpeg"
import webm from "../sleigh-bells-indoor.webm"
import video from "../sleigh-bells-indoor.mp4"

import cups from '../00-cups-clinking.mp3'
import fireplace from '../00-fireplace.mp3'
import music from '../00-music-box.mp3'
import sleigh from '../00-sleigh-bells.mp3'
import snowstorm from '../00-snowstorm.mp3'
// import boopSfx from '../boop.mp3';
import useSound from 'use-sound'


function Home() {

  const [playSnowstorm, { stopSnowstorm }] = useSound(snowstorm);
  // const [play, { stop }] = useSound(snowstorm);
  const [playFireplace, { stopFireplace }] = useSound(fireplace);
  const [playCups, { stopCups }] = useSound(cups);
  const [playMusic, { stopMusic }] = useSound(music);
  const [playSleigh, { stopSleigh }] = useSound(sleigh);
  

  return (
    <React.Fragment>
      <div class="title">
        <Row className="mt-4">
          <h1 class="mx-3" id="h1-id">it's cold outside</h1>
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
                <Card 
                  className="shadow border-0 card p-2 my-1" 
                  style={{ backgroundColor: 'beige', color: 'black' }}
                  onMouseEnter={() => playSnowstorm()} 
                  onMouseLeave={() => stopSnowstorm()}
                >                 
                <CardTitle tag="h7" id="h1-id">
                  snowstorm
                </CardTitle>
                </Card>
            </Row> 
            <Row style={{ width: "10rem"}}>
                <Card 
                  className="shadow border-0 card p-2 my-1" 
                  style={{ backgroundColor: 'beige', color: 'black' }}
                  onMouseEnter={() => playFireplace()} 
                  onMouseLeave={() => stopFireplace()}
                >
                <CardTitle tag="h7" id="h1-id">fireplace</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card 
                  className="shadow border-0 card p-2 my-1" 
                  style={{ backgroundColor: 'beige', color: 'black' }}
                  onMouseEnter={() => playCups()} 
                  onMouseLeave={() => stopCups()}
                >
                <CardTitle tag="h7" id="h1-id">cups clinking</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card 
                  className="shadow border-0 card p-2 my-1" 
                  style={{ backgroundColor: 'beige', color: 'black' }}
                  onMouseEnter={() => playMusic()} 
                  onMouseLeave={() => stopMusic()}
                >
                <CardTitle tag="h7" id="h1-id">music box</CardTitle>
                </Card>
            </Row>
            <Row style={{ width: "10rem"}}>
                <Card 
                  className="shadow border-0 card p-2 my-0" 
                  style={{ backgroundColor: 'beige', color: 'black' }}
                  onMouseEnter={() => playSleigh()} 
                  onMouseLeave={() => stopSleigh()}
                >
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