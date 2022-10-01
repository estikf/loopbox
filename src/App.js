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

  const stopPlayer = (player) => {
    player.unsync().stop()
  }

  const startPlayer = (title, player,parent,volume=1) => {
    if(!isStarted){
      startContext()
      Transport.start()
    }

    player.loop = true
    player.volume.value = volume
    player.sync().start(Transport.blockTime)

    // stop other players in the group
    let group = players.filter(i => i.name === parent)
    group[0].buttons.filter(i => i.title !== title).forEach(i => {
      stopPlayer(i.player)
    })
  }


  return (
    <div className="App">
        <CustomParticles/>
        <Container maxWidth="md" style={{"height":"100%"}}>
            <PlayersTable
                players={players}
                startPlayer={(title, player,parent, volume) => startPlayer(title, player, parent, volume)}
                stopPlayer={(player) => stopPlayer(player)}
            />
        </Container>
    </div>
  );
}

export default App;
