import React, { useEffect, useState } from 'react'
import {data} from '../../../src/fakeData'
import { useNavigate } from 'react-router-dom'
import './Room.scss'

const Room = () => {
    const [dataRoom,setDataRoom] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setDataRoom(data)
    }, [data])


    const handleClickRoom = (id) => {
        navigate(`/chat/${id}`)
    }
  return (
    <div className='room-master'>

        {dataRoom && dataRoom.length > 0 && dataRoom.map((room,index) => {
            return (
            
                <div className='room-container' key={index}>
                    <div className='name' onClick={() => handleClickRoom(room.id)}>{room.name}</div>
                </div>
                
            ) 
        })}
    </div>
  )
}

export default Room