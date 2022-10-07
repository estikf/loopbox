import "./App.css";
import { CustomParticles } from "./components/CustomParticles";
import { PlayersTable } from "./components/PlayersTable";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { usePlayers } from "./helpers/usePlayers";
import { LoadingBar } from "./components/LoadingBar";

function App() {
    const [players, loadingProgress] = usePlayers();
    
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
                        {loadingProgress === players.length ? (
                            <PlayersTable players={players} />
                        ) : (
                            <LoadingBar
                                loadingProgress={(loadingProgress * 100) / players.length}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
