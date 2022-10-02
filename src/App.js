import './App.css';
import { CustomParticles } from './components/CustomParticles';
import { PlayersTable } from './components/PlayersTable';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';

import kick234 from './media/kick1.wav'
import * as Tone from 'tone'
import { useEffect, useState } from 'react';

function App() {
  const context = useSelector(state => state.core.context)
  const players = useSelector(state => state.core.players)
  
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    new Tone.Player({url:kick234,onload:() => setIsLoaded("loaded")})
  },[])


  return (
    <div className="App">
      <CustomParticles/>
      {
        isLoaded ?
        <Container maxWidth="xl" style={{"height":"100%"}}>
          <Grid container justifyContent={"center"} alignItems="center" height={"100%"}>
            <Grid item lg={8} md={10} xs={12}>
              <PlayersTable
                  players={players}
                  isContextStarted={context.isContextStarted}
              />
            </Grid>
          </Grid>
        </Container>
        : 
        <Typography variant="h4" color="white">
            Loading assets...
        </Typography>
      }
    </div>
  );
}

export default App;
