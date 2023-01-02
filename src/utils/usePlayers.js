import * as Tone from "tone";
import loopkits from "../data/loopkits.json";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
    loadPlayers,
    resetPlayers,
    updateButtonState,
} from "../redux/coreSlice";

let playerQueue = [];
const Transport = Tone.Transport;

export const usePlayers = (id) => {
    const [loadedLoops, setLoadedLoops] = useState(0);
    const [loopStep, setLoopStep] = useState(0)
    const loopkit = loopkits.list.find((i) => i.id === id);
    const loadingProgress = Math.round(
        (loadedLoops * 100) / loopkit.loops.length
    );
    const dispatch = useDispatch();

    Transport.bpm.value = loopkit ? loopkit.bpm : "124";

    const players = useMemo(() => {
        return (
            loopkit &&
            loopkit.loops.map((i) => {
                return {
                    ...i,
                    loop: new Tone.Player({
                        url: process.env.PUBLIC_URL + `${i.url}`,
                        onload: () => setLoadedLoops((state) => state + 1),
                    }).toDestination(),
                };
            })
        );
    }, [loopkit]);

    const startContext = async () => {
        await Tone.start();
        Transport.start();
    };

    const startPlayer = async (player) => {
        const group = players.filter((i) => i.parent === player.parent);
        const music = players.find((i) => i.title === player.title).loop;
        const otherPlayersInGroup = group.filter((i) => i.title !== player.title);

        // start the player
        music.volume.value = -3;
        music.loop = true;
        music.loopStart = "00:00";
        music.loopEnd = player.loopEnd ? player.loopEnd : "00:32";
        music.sync().start(Transport.blockTime);

        // stop other players in the group
        otherPlayersInGroup.forEach((i) => {
            i.loop.unsync().stop();
        });

        // update the state with the new array
        dispatch(
            updateButtonState({
                parent: player.parent,
                title: player.title,
                status: "started",
            })
        );
    };

    const stopPlayer = (player) => {
        const music = player.loop;
        music.unsync().stop();
        dispatch(updateButtonState({ title: player.title, status: "stopped" }));
    };

    const addToQueue = (callback, title) => {
        callback && playerQueue.push(callback);
        dispatch(updateButtonState({ title: title, status: "queued" }));
    };

    const handleOnClick = async (button, player) => {
        console.log(player)
        if (Tone.context.state !== "started") {
            await startContext();
        }

        if (button.status === "stopped") {
            addToQueue(
                () => startPlayer(player),
                player.title
            );
            return;
        }
        if (button.status === "started") {
            addToQueue(() => stopPlayer(player), player.title);
            return;
        }
    };

    useEffect(() => {
        dispatch(loadPlayers({ id: id, players: loopkit.loops }));

        return () => {
            dispatch(resetPlayers());
        };
        // eslint-disable-next-line
    }, [loopkit, dispatch]);

    useEffect(() => {
        Transport.scheduleRepeat(() => {
            if (playerQueue.length > 0) {
                playerQueue.forEach((i) => i());
            }
            playerQueue = [];
        }, "00:4");

        return () => {
            Transport.stop();
            Transport.cancel();
            players.forEach((i) => i.loop.unsync().stop());
            playerQueue = [];
        };
        // eslint-disable-next-line
    }, [id]);

    return [players, loopkit.bpm, loadingProgress, handleOnClick];
};
