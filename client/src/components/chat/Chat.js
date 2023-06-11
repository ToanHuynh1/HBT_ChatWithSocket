import React, { useState } from 'react'
import io from 'socket.io-client'
import './Chat.scss'
import DetailChat from './DetailChat'
import { useParams } from 'react-router-dom'

const socket = io.connect("http://localhost:3001")

const Chat = () => {
    const [userName, setUserName] = useState('')
    const [showChat, setShowChat] = useState(false)
    const { id } = useParams();

    const joinRoom = () => {
        if (userName !== '' && id !== ''){
            socket.emit("join_room", id)
        }

        setShowChat(true)
    }

  return (
    <>
        { !showChat ? ( 
        <div className='chat-container'>
            <h3 className='title'>Tham gia chat</h3>

            <div className='content-name'>
                <input 
                    type='text'
                    placeholder='HBT...'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button className='btn-join' onClick={joinRoom}>Tham gia</button>
            </div>
        </div> )

        : ( 
        <DetailChat socket={socket} username={userName} room={id}/>
        )
        } 
       

        
    </>
  )
}

export default Chat