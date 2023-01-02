import { Grid } from "@mui/material";
import { PlayerButton } from "./PlayerButton/PlayerButton";
import { chunkArray } from "../../utils/utils";

export const Board = ({ players, handleOnClick }) => {
    return (
        <Grid
            container
            spacing={1}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection="row"
            height={"100%"}
        >
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
                                        handleOnClick={(button, player) =>
                                            handleOnClick(button, player)
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
