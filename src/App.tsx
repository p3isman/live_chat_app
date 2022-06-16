import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Lobby from './components/Lobby';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lobby />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
