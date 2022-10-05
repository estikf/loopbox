import "./App.css";
import { CustomParticles } from "./components/CustomParticles";
import { PlayersTable } from "./components/PlayersTable";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { usePlayers } from "./helpers/usePlayers";

function App() {

    const [players, isLoaded] = usePlayers()

    return (
        <div className="App">
            <CustomParticles />
            <Container maxWidth="xl" style={{ height: "100%" }}>
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems="center"
                    height={"100%"}
                >
                    <Grid item lg={8} md={10} xs={12}>
                        {isLoaded ? (
                            <PlayersTable
                                players={players}
                            />
                        ) : (
                            <Typography variant="h5" color="gray">
                                Loading...
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
