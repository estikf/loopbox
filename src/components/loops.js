import * as Tone from 'tone'

import kick1 from '../media/kick1.wav'
import kick2 from '../media/kick2.wav'
import kick3 from '../media/kick3.wav'
import kick4 from '../media/kick4.wav'

import synth1 from '../media/synth1.wav'
import synth2 from '../media/synth2.wav'
import synth3 from '../media/synth3.wav'
import synth4 from '../media/synth4.wav'

import top1 from '../media/top1.wav'
import top2 from '../media/top2.wav'
import top3 from '../media/top3.wav'
import top4 from '../media/top4.wav'

import brass1 from '../media/brass1.wav'
import brass2 from '../media/brass2.wav'
import brass3 from '../media/brass3.wav'
import brass4 from '../media/brass4.wav'

import fx1 from '../media/fx1.wav'

export const loops = [
    {
        title: "kick1",
        parent: "kick",
        loop: new Tone.Player(kick1).toDestination(),
    },
    {
        title: "kick2",
        parent: "kick",
        loop: new Tone.Player(kick2).toDestination(),
    },
    {
        title: "kick3",
        parent: "kick",
        loop: new Tone.Player(kick3).toDestination(),
    },
    {
        title: "kick4",
        parent: "kick",
        loop: new Tone.Player(kick4).toDestination(),
    },
    {
        title: "top1",
        parent: "top",
        loop: new Tone.Player(top1).toDestination(),
    },
    {
        title: "top2",
        parent: "top",
        loop: new Tone.Player(top2).toDestination(),
    },
    {
        title: "top3",
        parent: "top",
        loop: new Tone.Player(top3).toDestination(),
    },
    {
        title: "top4",
        parent: "top",
        loop: new Tone.Player(top4).toDestination(),
    },
    {
        title: "synth1",
        parent: "synth",
        loop: new Tone.Player(synth1).toDestination()
    },
    {
        title: "synth2",
        parent: "synth",
        loop: new Tone.Player(synth2).toDestination()
    },
    {
        title: "synth3",
        parent: "synth",
        loop: new Tone.Player(synth3).toDestination()
    },
    {
        title: "synth4",
        parent: "synth",
        loop: new Tone.Player(synth4).toDestination()
    },
    {
        title: "brass1",
        parent: "brass",
        loop: new Tone.Player(brass1).toDestination(),
    },
    {
        title: "brass2",
        parent: "brass",
        loop: new Tone.Player(brass2).toDestination(),
    },
    {
        title: "brass3",
        parent: "brass",
        loop: new Tone.Player(brass3).toDestination(),
    },
    {
        title: "brass4",
        parent: "brass",
        loop: new Tone.Player({url:brass4}).toDestination()
    },
    {
        title: "fx1",
        parent: "fx",
        loop: new Tone.Player({url:fx1}).toDestination()
    },
]
