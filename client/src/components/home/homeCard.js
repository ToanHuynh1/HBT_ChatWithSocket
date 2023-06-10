import React from "react"
import { Link } from "react-router-dom"
import './Home.scss'


const HomeCard = ({ item: { id, cover, name, desc, gender, tags } }) => {

  return (
      <div className='container-home-card'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content'>
          <div className='details'>
            <h1 className="name">{name}</h1>
            <p className="desc">{desc}</p>
            <div className='cast'>
              <h4>
                <span>Age </span>
                {tags}
              </h4>
              <h4>
                <span>Gender </span>
                {gender}
              </h4>
            </div>
            <button className='btn-chat'>
              Chat
            </button>
          </div>
        </div>
      </div>
  )
}

export default HomeCard
