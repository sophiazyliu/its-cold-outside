import React from 'react'
import {
    Card, 
    CardTitle
} from 'reactstrap'
import useSound from 'use-sound'
import snowstorm from '../00-snowstorm.mp3'

function Snowstorm() {
    const [play, { stop }] = useSound(snowstorm);
    return (
        <Card 
            className="shadow border-0 card p-2 my-1" 
            style={{ backgroundColor: 'beige', color: 'black' }}
            onMouseEnter={() => play()} 
            onMouseLeave={() => stop()}
            >                 
        <CardTitle tag="h7" id="h1-id">
            snowstorm
        </CardTitle>
        </Card>
    )
}

export default Snowstorm
