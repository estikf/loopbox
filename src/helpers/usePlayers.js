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

    const [loadingProgress, setLoadingProgress] = useState(0)
    

    const players = useMemo(() => [
        {
            title: "kick1",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player({url:kick1, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "kick2",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player({url:kick2, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "kick3",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player({url:kick3, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "kick4",
            parent: "kick",
            isPlaying:false,
            loop: new Tone.Player({url:kick4, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "fx1",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player({url:fx1, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "fx2",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player({url:fx2, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "fx3",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player({url:fx3, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "fx4",
            parent: "fx",
            isPlaying:false,
            loop: new Tone.Player({url:fx4, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "synth1",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player({url:synth1, onload:() => setLoadingProgress(state => state + 1)}).toDestination()
        },
        {
            title: "synth2",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player({url:synth2, onload:() => setLoadingProgress(state => state + 1)}).toDestination()
        },
        {
            title: "synth3",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player({url:synth3, onload:() => setLoadingProgress(state => state + 1)}).toDestination()
        },
        {
            title: "synth4",
            parent: "synth",
            isPlaying:false,
            loop: new Tone.Player({url:synth4, onload:() => setLoadingProgress(state => state + 1)}).toDestination()
        },
        {
            title: "brass1",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player({url:brass1, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "brass2",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player({url:brass2, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "brass3",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player({url:brass3, onload:() => setLoadingProgress(state => state + 1)}).toDestination(),
        },
        {
            title: "brass4",
            parent: "brass",
            isPlaying:false,
            loop: new Tone.Player({url:brass4, onload:() => setLoadingProgress(state => state + 1)}).toDestination()
        },
    ],[])
    
    return [players, loadingProgress]
}



