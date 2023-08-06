import io from 'socket.io-client'
import { useState } from 'react';
import Chat from './Chat';
const socket = io.connect("http://localhost:5002")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(username !== '' && room !== ''){
      socket.emit("join_room", room);
    }
  }

  return (
    <div className="App">
      <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}  
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
        <div>
          <Chat />
        </div>
    </div>
  );
}

export default App;