import { Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

export const LoadingBar = ({ loadingProgress }) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={10}>
                <Typography color="wheat">
                    Loading music...
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={10}>
                        <LinearProgress
                            style={{ height: "0.5rem" }}
                            variant="determinate"
                            value={loadingProgress}
                            color="primary"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography color="wheat" variant="subtitle2" >
                            %{loadingProgress.toString()}
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={10}>
                <Typography color="wheat">
                    Use headphones for the best experience.
                </Typography>
            </Grid>
        </Grid>
    );
};
