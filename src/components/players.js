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
    [
        {
            title: "kick1",
            player: new Tone.Player(kick1).toDestination(),
        },
        {
            title: "kick2",
            player: new Tone.Player(kick2).toDestination(),
        },
        {
            title: "kick3",
            player: new Tone.Player(kick3).toDestination(),
        },
        {
            title: "kick4",
            player: new Tone.Player(kick4).toDestination(),
        },
    ],
    [
        {
            title: "top1",
            player: new Tone.Player(top1).toDestination(),
        },
        {
            title: "top2",
            player: new Tone.Player(top2).toDestination(),
        },
        {
            title: "top3",
            player: new Tone.Player(top3).toDestination(),
        },
        {
            title: "top4",
            player: new Tone.Player(top4).toDestination(),
        },
    ],
    [
        {
            title: "synth1",
            player: new Tone.Player(synth1).toDestination(),
        },
        {
            title: "synth2",
            player: new Tone.Player(synth2).toDestination(),
        },
        {
            title: "synth3",
            player: new Tone.Player(synth3).toDestination(),
        },
        {
            title: "synth4",
            player: new Tone.Player(synth4).toDestination(),
        },
    ],
    [
        {
            title: "fx1",
            player: new Tone.Player(fx1).toDestination(),
        },
        {
            title: "fx2",
            player: new Tone.Player(fx2).toDestination(),
        },
        {
            title: "fx3",
            player: new Tone.Player(fx3).toDestination(),
        },
        {
            title: "fx4",
            player: new Tone.Player(fx4).toDestination(),
        },
    ],
];
