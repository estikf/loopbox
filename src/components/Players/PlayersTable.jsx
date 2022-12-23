import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { PlayerButton } from "./PlayerButton";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";
import {
    loadPlayers,
    queuedButtonState,
    resetPlayers,
    startButtonState,
    startReduxContext,
    stopButtonState,
} from "../../redux/coreSlice";
import loopkits from '../../helpers/loopkits.json'
import { InvisibleAudio } from "./InvisibleAudio";
import unmuteIosAudio from "unmute-ios-audio";
import { chunkArray } from "./utils";

unmuteIosAudio()

const Transport = Tone.Transport;
let playerQueue = [];

export const PlayersTable = ({ players, bpm, id }) => {
    const dispatch = useDispatch();
    const context = useSelector((state) => state.core.context);
    const playersInRedux = useSelector((state) => state.core.players);
    const currentLoopkit = loopkits.loopkits.find(i => i.id === id)
    Transport.bpm.value = bpm;

    useEffect(() => {
        dispatch(loadPlayers({players:currentLoopkit.loops}))

        Transport.scheduleRepeat((time) => {
            if (playerQueue.length > 0) {
                playerQueue.forEach((i) => i());
            }
            playerQueue = [];
        }, "00:4");

        return () => {
            Transport.stop();
            players.forEach((i) => i.loop.unsync().stop());
            dispatch(resetPlayers());
            playerQueue = [];
        };
        // eslint-disable-next-line
    }, [id]);

    const startContext = async () => {
        var sound = document.getElementById("invisibleSound")
        sound.play()
        await Tone.start();
        Transport.start();
        dispatch(startReduxContext())
    };

    const startPlayer = async (parent, title, loopEnd) => {

        if (Tone.context.state !== "running") {
            Tone.context.resume();
            await Tone.start();
        }

        const group = players.filter((i) => i.parent === parent);
        const button = players.filter((i) => i.title === title)[0];
        const otherPlayersInGroup = group.filter((i) => i.title !== title);
        const player = button.loop;

        // start the player
        player.volume.value = -3;
        player.loop = true;
        player.loopStart = "00:00";
        player.loopEnd = loopEnd ? loopEnd : "00:32";
        player.sync().start(Transport.blockTime);

        // stop other players in the group
        otherPlayersInGroup.forEach((i) => {
            i.loop.unsync().stop();
        });

        // update the state with the new array
        dispatch(startButtonState({ parent: parent, title: title }));
    };

    const stopPlayer = (title) => {
        const button = players.find((i) => i.title === title).loop;
        button.unsync().stop();
        dispatch(stopButtonState({ title: title }));
    };

    const addToQueue = (callback, title) => {
        (callback) && playerQueue.push(callback);
        dispatch(queuedButtonState({ title: title }));
    };

    const handleOnClick = async (button, player) => {
        if (button.status === "queued") {
            return;
        }
        if (!context.isStarted) {
            Tone.context.resume();
            await startContext();
        }

        if (button.status === "stopped") {
            addToQueue(() => startPlayer(player.parent, player.title, player.loopEnd), player.title);
        } else {
            addToQueue(() => stopPlayer(player.title), player.title);
        }
    }

    return (
        playersInRedux.length === players.length &&
        <Grid
            container
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection="row"
            height={"100%"}
        >
            <InvisibleAudio/>
            {chunkArray(players, 4).map((group, index) => (
                <Grid item key={index}>
                    <Grid
                        container
                        spacing={1}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection="column"
                        height={"100%"}
                    >
                        {group &&
                            group.map((player, index) => (
                                <Grid item xs={12} key={index}>
                                    <PlayerButton
                                        player={player}
                                        handleOnClick={(button, player) => handleOnClick(button, player)}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};
