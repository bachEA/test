import React, { useState } from 'react'

export default function TourCard(props) {
  const [readMore, setReadMore] = useState(true)
  const { id, image, name, description, price } = props.card
  const { handleNotInterested } = props
  return (
    <div>
      <h3> This is a postcard</h3>
      <img src={image} alt='' />
      <h3> {name}</h3>
      <p>
        <h3>
          {' '}
          {readMore ? `${description.substring(0, 10)} ...` : description}
        </h3>
        <button onClick={() => setReadMore((prevReadMore) => !prevReadMore)}>
          {' '}
          {readMore ? 'read more' : 'read less'}
        </button>
      </p>

      <h3> {price}</h3>
      <button value={id} onClick={(e) => handleNotInterested(e)}>
        {' '}
        Not interested{' '}
      </button>
    </div>
  )
}
