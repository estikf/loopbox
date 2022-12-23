import ResponsiveAppBar from "./components/Appbar/Appbar";
import { Container } from "@mui/system";
import { Routes } from "./components/Routes";
import { Box } from "@mui/material";

function App() {
    return (
        <Box height="100%">
            <ResponsiveAppBar />
            <Container
                maxWidth="xl"
                style={{
                    paddingTop: "64px",
                    height:"calc(100vh - 1rem)"
                }}
            >
                <Routes />
            </Container>
        </Box>
    );
}

export default App;
