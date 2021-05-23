import './shared/global/style/Global.css'
import { Routing } from './routes/Routing'
import { PokemonProvider } from './shared/provider/PokemonProvider'
import { ScoreProvider } from './shared/provider/ScoreProvider'

function App() {
  return (
    <div className='app-container'>
      <ScoreProvider>  
        <PokemonProvider>
          <Routing>
          </Routing>
        </PokemonProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
