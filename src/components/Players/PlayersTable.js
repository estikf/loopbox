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
} from "../../features/coreSlice";
import loopkits from '../../helpers/loopkits.json'
import { InvisibleAudio } from "./InvisibleAudio";
import unmuteIosAudio from "unmute-ios-audio";

const Transport = Tone.Transport;

export const PlayersTable = ({ players, bpm, id }) => {
    const dispatch = useDispatch();
    const context = useSelector((state) => state.core.context);
    const playersInRedux = useSelector((state) => state.core.players);
    
    const playerQueue = useRef([]);
    
    Transport.bpm.value = bpm;

    useEffect(() => {
        unmuteIosAudio()
        dispatch(loadPlayers({players:loopkits[id].loops}))

        Transport.scheduleRepeat((time) => {
            if (playerQueue.current.length > 0) {
                playerQueue.current.forEach((i) => i());
            }
            playerQueue.current = [];
        }, "00:4");

        return () => {
            Transport.stop();
            players.forEach((i) => i.loop.unsync().stop());
            dispatch(resetPlayers());
            playerQueue.current = [];
        };
        // eslint-disable-next-line
    }, [id]);

    const startContext = async () => {
        var sound = document.getElementById("invisibleSound")
        sound.play()
        await Tone.start();
        Transport.start();
        await dispatch(startReduxContext())
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
        (callback) && playerQueue.current.push(callback);
        dispatch(queuedButtonState({ title: title }));
    };

    const chunkArray = (array, size) => {
        let result = [];
        for (let i = 0; i < array.length; i += size) {
            let chunk = array.slice(i, i + size);
            result.push(chunk);
        }
        return result;
    };

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
                                        playInvisibleAudio
                                        title={player.title}
                                        parent={player.parent}
                                        startColor={player.startColor}
                                        stopColor={player.stopColor}
                                        context={context}
                                        startContext={() => startContext()}
                                        addToQueue={(cb) =>
                                            addToQueue(cb, player.title)
                                        }
                                        startPlayer={() =>
                                            startPlayer(
                                                player.parent,
                                                player.title,
                                                player.loopEnd
                                            )
                                        }
                                        stopPlayer={() =>
                                            stopPlayer(player.title)
                                        }
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};
