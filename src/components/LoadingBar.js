import { CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const LoadingBar = ({ loadingProgress }) => {
    return (
        <Grid container spacing={3} justifyContent="center" alignItems={"center"}>
            <Grid item xs={12}>
                <Box display={"flex"} justifyContent="center" position="relative">
                    <CircularProgress
                        variant="determinate"
                        value={loadingProgress}
                        color="info"
                        size={"4rem"}
                    />
                    <Box
                        sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Typography variant="caption" component="div" color="white">
                            {`${Math.round(loadingProgress)}%`}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography color="wheat" textAlign={"center"}>
                    Use headphones for the best experience.
                </Typography>
            </Grid>
        </Grid>
    );
};
