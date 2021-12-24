import './App.css';
// import useSound from 'use-sound';
import {
  // Row, 
  // Col, 
  // Container, 
  Card, 
  // CardTitle, 
  // CardText, 
  // Button,
  // CardImg,
  // CardBody
} from 'reactstrap';
import VideoBg from "reactjs-videobg";
import webm from "./snowing.webm";
import video from "./snowing.mp4";
import image from "./snowing.jpeg";
import "./App.css";

function App() {
    return (
      <div className="App">
        <VideoBg poster={image}>
          <VideoBg.Source src={webm} type="video/webm" />
          <VideoBg.Source src={video} type="video/mp4" />
        </VideoBg>
  
        <div className="sounds">
            <Card />
        </div>
      </div>
    );
  }

export default App;
