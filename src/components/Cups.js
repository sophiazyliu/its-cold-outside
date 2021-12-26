import React from 'react'
import {
    Card, 
    CardTitle
} from 'reactstrap'
import useSound from 'use-sound'
import cups from '../00-cups-clinking.mp3'

function Cups() {
    const [play, { stop }] = useSound(cups);
    return (
        <Card 
            className="shadow border-0 card p-2 my-1" 
            style={{ backgroundColor: 'beige', color: 'black' }}
            onMouseEnter={() => play()} 
            onMouseLeave={() => stop()}
            >                 
        <CardTitle tag="h7" id="h1-id">
            cups clinking
        </CardTitle>
        </Card>
    )
}

export default Cups
