import ResponsiveAppBar from "./components/Appbar/Appbar";
import { Routes } from "./components/Router/Routes";
import { Box } from "@mui/material";

function App() {
    return (
        <Box height="100%">
            <ResponsiveAppBar />
            <div
                style={{
                    paddingTop: "64px",
                    height:"calc(100vh - 64px)"
                }}
            >
                <Routes />
            </div>
        </Box>
    );
}

export default App;
