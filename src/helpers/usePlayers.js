import * as Tone from "tone";
import loopkits from "./loopkits.json";
import { useMemo, useState } from "react";

export const usePlayers = (id) => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    const bpm = loopkits[id] ? loopkits[id].bpm : "124"
    const category = loopkits[id] ? loopkits[id].category : ""
    
    const players = useMemo(
        () => {
            return loopkits[id] && loopkits[id].loops.map(i => {
                return(
                    {
                        title: i.title,
                        parent: i.parent,
                        status: i.status,
                        loopEnd:i.loopEnd,
                        startColor:i.startColor,
                        stopColor:i.stopColor,
                        loop: new Tone.Player({url: process.env.PUBLIC_URL + `${i.url}`,onload: () => setLoadingProgress((state) => state + 1)}).toDestination()
                    }
                )
            })
        },[id]);

    return [players, bpm, loadingProgress, category];
};
