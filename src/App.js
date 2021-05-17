import './shared/global/style/Global.css'
import { Routing } from './routes/Routing'
import { PokemonProvider } from './shared/provider/PokemonProvider'

function App() {
  return (
    <div>
      <PokemonProvider>
        <Routing>
        </Routing>
      </PokemonProvider>
    </div>
  );
}

export default App;
