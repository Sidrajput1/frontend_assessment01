import React from 'react'

function ResultCard({item}) {

  return (
    <div className='result-card'>
        <div className='result-images'>
            <div className='image-box'>
                <img src={item.beforeImage} alt="Before treatement" />
                <span>Befor</span>

            </div>

            <div className='image-box'>
                <img src={item.afterImage} alt="After treatement" />
                <span>After</span>
            </div>

        </div>

        <div className='result-content'>
            <h3>{item.name}</h3>
                <p>{item.treatment}</p>
                <small>{item.duration}</small>
        </div>

    </div>
  )
}

export default ResultCard