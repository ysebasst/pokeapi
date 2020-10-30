import React, {Fragment} from 'react'
import Navbar from './components/Navbar';
import PokemonContent from './components/PokemonContent';

function App() {
  return (
    <Fragment>
      <Navbar />
      <PokemonContent />
    </Fragment>
  );
}

export default App;
