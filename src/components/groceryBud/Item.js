import React from 'react'

import './Item.css'

export default function Item(props) {
  const { item, onHandleEdit, onHandleDelete } = props

  return (
    <li key={item.id} className='item'>
      <h3>{item.text}</h3>
      <button type='button' onClick={onHandleEdit} className='margin-right'>
        {' '}
        Edit{' '}
      </button>
      <button type='button' onClick={() => onHandleDelete(item.id)}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}
