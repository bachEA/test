import React from 'react'

export default function CartItem(props) {
  const { item } = props
  return (
    <div>
      <img src={item.img} alt=''></img>
      <h3> Price </h3>
      <h3> Number </h3>
      <button type='button' onClick={handleOnClick}>
        {' '}
        Add{' '}
      </button>
      <button type='button' onClick={handleOnClick}>
        {' '}
        Decrease{' '}
      </button>
    </div>
  )
}
