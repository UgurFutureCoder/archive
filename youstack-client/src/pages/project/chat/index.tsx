import { useState } from "react"
import { io } from "socket.io-client"
const socket = io("http://localhost:4001")
const Index = () => {
const [room, setRoom] = useState({
    roomName: ''
}
    )
    const onChange = (event: any) => {
        setRoom({
            ...room,
            [event.target.name]: event.target.value
        })
    }

    const joinRoom = () => {
        const Room = room.roomName
        if(Room !== '') {
            socket.emit('join_room', Room)
        }
    }

    return (
        <div>
            <input type="text" value={room.roomName} onChange={onChange} name='roomName'/>
            <button onClick={joinRoom}>submit</button>

        </div>
    )
}
export default Index