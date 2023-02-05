import './Appbar.scss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';

const ResponsiveAppBar = () => {

  const history = useHistory()

  return (
    <AppBar position="fixed" style={{backgroundColor:"black", boxShadow:"none", zIndex:1200}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              cursor:"pointer"
            }}
          >
            <img src="/logo512.png" height={"60px"} onClick={() => history.push("/")} alt="img"/>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
