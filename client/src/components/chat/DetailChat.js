import React, { useEffect, useState } from 'react'
import './DetailChat.scss'

const DetailChat = ({socket, username, room}) => {

    const [currentMessage, setCurrentMessage] = useState('')
    const [totalMessage, setTotalMessage] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== ''){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }

            
            await socket.emit("send_message", messageData)
            setTotalMessage((list) => [...list, messageData])
            setCurrentMessage("");
        }

    }

    useEffect(() => {
        socket.on("recive_message", (data) => {
            setTotalMessage((list)=> [...list, data])
        })
    }, [socket])
  return (
    <div className='chat-container'>
        <div className='chat-header'>
            <p>Live chat</p>
        </div>
        <div className='chat-body'>
            {totalMessage.map((message,index) => {
                return (
                    <div className='message'>
                  
                        <div>
                            <div className='message-content'>
                                <p>{message.message}</p>
                            </div>

                            <div className='message-meta'>
                                <p>{message.time}</p>
                                <p>{message.author}</p>
                            </div>
                        </div>
                     
                    </div>
                )
            })}
        </div>
        <div className='chat-footer'>
            <input type='text' placeholder='Hello...' onChange={(e) => setCurrentMessage(e.target.value)}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
  )
}

export default DetailChat