import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Player } from './components/Player/Player';
import { Fotos } from './components/Fotos/Fotos';
import { Video } from './components/Video/Video';
import { Carta } from './components/Carta/Carta';

function App() {
  return (
    <>
      <Navbar />
      <Player />
      <Fotos />
      <Video />
      <Carta />
    </>
  );
}

export default App;
