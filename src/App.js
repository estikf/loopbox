import './App.css';
import * as tone from 'tone'
import { useState } from 'react';
import { CustomParticles } from './components/CustomParticles';
import { PlayersTable } from './components/PlayersTable';
import { players } from './components/players';
import { Container } from '@mui/system';

const Tone = tone
const Transport = Tone.Transport

function App() {

  const [isStarted, setIsStarted] = useState(false)

  const startContext = () => {
    Tone.start()
    setIsStarted(true)
  }

  const startPlayer = (player,volume=1) => {
    if(!isStarted){
      startContext()
      Transport.start()
    }

    player.loop = true
    player.volume.value = volume
    player.sync().start(Transport.blockTime)
  }

  const stopPlayer = (player) => {
    player.unsync().stop()
  }



  return (
    <div className="App">
        <CustomParticles/>
        <Container maxWidth="md" style={{"height":"100%"}}>
            <PlayersTable
                players={players}
                startPlayer={(player,volume) => startPlayer(player, volume)}
                stopPlayer={(player) => stopPlayer(player)}
            />
        </Container>
    </div>
  );
}

export default App;
