import React from 'react'
import {
    Card, 
    CardTitle
} from 'reactstrap'
import useSound from 'use-sound'
import fireplace from '../00-fireplace.mp3'

function Fireplace() {
    const [play, { stop }] = useSound(fireplace);
    return (
        <Card 
            className="shadow border-0 card p-2 my-1" 
            style={{ backgroundColor: 'beige', color: 'black' }}
            onMouseEnter={() => play()} 
            onMouseLeave={() => stop()}
            >                 
        <CardTitle tag="h7" id="h1-id">
            fireplace
        </CardTitle>
        </Card>
    )
}

export default Fireplace
