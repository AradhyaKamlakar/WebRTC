import "./App.css";
import { BrowserRouter , Routes, Route,} from "react-router-dom";
import LobbyScreen from "./components/screens/Lobby";
import RoomPage from "./components/screens/Room";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen /> } />
        <Route path="/room/:roomId" element={<RoomPage />}/>
      </Routes>
    </div>
  );
}

export default App;
