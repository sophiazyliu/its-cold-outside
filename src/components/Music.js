import React from 'react'
import {
    Card, 
    CardTitle
} from 'reactstrap'
import useSound from 'use-sound'
import music from '../00-music-box.mp3'

function Music() {
    const [play, { stop }] = useSound(music);
    return (
        <Card 
            className="shadow border-0 card p-2 my-1" 
            style={{ backgroundColor: 'beige', color: 'black' }}
            onMouseEnter={() => play()} 
            onMouseLeave={() => stop()}
            >                 
        <CardTitle tag="h7" id="h1-id">
            music box
        </CardTitle>
        </Card>
    )
}

export default Music
