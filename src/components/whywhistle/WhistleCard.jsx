import React from 'react'

function WhistleCard({item}) {
  return (
    <div className='whistle-card'>
        <img src={item.image} alt={item.title} className='whistle-img' />
        <div className='whistle-card-content'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default WhistleCard