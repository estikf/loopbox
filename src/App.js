import { Container } from "@mui/system";
import { Routes } from "./components/Routes";
import ResponsiveAppBar from "./components/Appbar/Appbar";

function App() {
    return (
        <div>
            <ResponsiveAppBar />
            <Container
                maxWidth="lg"
                style={{
                    paddingTop: "64px",
                    paddingBottom: "2rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    height:"100vh"
                }}
            >
                <Routes />
            </Container>
        </div>
    );
}

export default App;
