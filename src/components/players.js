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

import fx1 from '../media/fx1.wav'
import fx2 from '../media/fx2.wav'
import fx3 from '../media/fx3.wav'
import fx4 from '../media/fx4.wav'

export const players = [
    {
        name:"kick",
        buttons:[
            {
                loop:true,
                isPlaying:false,
                title: "kick1",
                parent:"kick",
                player: new Tone.Player(kick1).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "kick2",
                parent:"kick",
                player: new Tone.Player(kick2).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "kick3",
                parent:"kick",
                player: new Tone.Player(kick3).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "kick4",
                parent:"kick",
                player: new Tone.Player(kick4).toDestination(),
            },
        ]
    },
    {
        name:"top",
        buttons:[
            {
                loop:true,
                isPlaying:false,
                title: "top1",
                parent:"top",
                player: new Tone.Player(top1).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "top2",
                parent:"top",
                player: new Tone.Player(top2).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "top3",
                parent:"top",
                player: new Tone.Player(top3).toDestination(),
            },
            {
                loop:true,
                isPlaying:false,
                title: "top4",
                parent:"top",
                player: new Tone.Player(top4).toDestination(),
            },
        ]
    },
    {
        name:"synth",
        buttons:[
            {
                loop:true,
                isPlaying:false,
                title: "synth1",
                parent:"synth",
                player: new Tone.Player(synth1).toDestination()
            },
            {
                loop:true,
                isPlaying:false,
                title: "synth2",
                parent:"synth",
                player: new Tone.Player(synth2).toDestination()
            },
            {
                loop:true,
                isPlaying:false,
                title: "synth3",
                parent:"synth",
                player: new Tone.Player(synth3).toDestination()
            },
            {
                loop:true,
                isPlaying:false,
                title: "synth4",
                parent:"synth",
                player: new Tone.Player(synth4).toDestination()
            },
        ]
    },
    {
        name:"fx",
        buttons:[
            {
                loop:false,
                isPlaying:false,
                title: "fx1",
                parent:"fx",
                player: new Tone.Player(fx1).toDestination(),
            },
            {
                loop:false,
                isPlaying:false,
                title: "fx2",
                parent:"fx",
                player: new Tone.Player(fx2).toDestination(),
            },
            {
                loop:false,
                isPlaying:false,
                title: "fx3",
                parent:"fx",
                player: new Tone.Player(fx3).toDestination(),
            },
            {
                loop:false,
                isPlaying:false,
                title: "fx4",
                parent:"fx",
                player: new Tone.Player(fx4).toDestination(),
            },
        ]
    }
];
