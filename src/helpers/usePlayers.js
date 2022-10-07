import * as Tone from 'tone'

import kick1 from '../media/kick1.wav'
import kick2 from '../media/kick2.wav'
import kick3 from '../media/kick3.wav'
import kick4 from '../media/kick4.wav'

import synth1 from '../media/synth1.wav'
import synth2 from '../media/synth2.wav'
import synth3 from '../media/synth3.wav'
import synth4 from '../media/synth4.wav'

import fx1 from '../media/fx1.wav'
import fx2 from '../media/fx2.wav'
import fx3 from '../media/fx3.wav'
import fx4 from '../media/fx4.wav'

import brass1 from '../media/brass1.wav'
import brass2 from '../media/brass2.wav'
import brass3 from '../media/brass3.wav'
import brass4 from '../media/brass4.wav'

import { useMemo, useState } from 'react'

export const usePlayers = () => {

    const [isLoaded, setIsLoaded] = useState(false)
    

    const players = useMemo(() => [
        {
            title: "kick1",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player(kick1).toDestination(),
        },
        {
            title: "kick2",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player(kick2).toDestination(),
        },
        {
            title: "kick3",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player(kick3).toDestination(),
        },
        {
            title: "kick4",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player(kick4).toDestination(),
        },
        {
            title: "fx1",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player(fx1).toDestination(),
        },
        {
            title: "fx2",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player(fx2).toDestination(),
        },
        {
            title: "fx3",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player(fx3).toDestination(),
        },
        {
            title: "fx4",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player(fx4).toDestination(),
        },
        {
            title: "synth1",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player(synth1).toDestination()
        },
        {
            title: "synth2",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player(synth2).toDestination()
        },
        {
            title: "synth3",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player(synth3).toDestination()
        },
        {
            title: "synth4",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player(synth4).toDestination()
        },
        {
            title: "brass1",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player(brass1).toDestination(),
        },
        {
            title: "brass2",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player(brass2).toDestination(),
        },
        {
            title: "brass3",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player(brass3).toDestination(),
        },
        {
            title: "brass4",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player({url:brass4, onload:() => setIsLoaded(true)}).toDestination()
        },
    ],[])
    
    return [players, isLoaded]
}



