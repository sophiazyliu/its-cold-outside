import React from 'react'
import {
    Card, 
    CardTitle
} from 'reactstrap'
import useSound from 'use-sound'
import sleigh from '../00-sleigh-bells.mp3'

function Sleigh() {
    const [play, { stop }] = useSound(sleigh);
    return (
        <Card 
            className="shadow border-0 card p-2 my-1" 
            style={{ backgroundColor: 'beige', color: 'black' }}
            onMouseEnter={() => play()} 
            onMouseLeave={() => stop()}
            >                 
        <CardTitle tag="h7" id="h1-id">
            sleigh bells
        </CardTitle>
        </Card>
    )
}

export default Sleigh
