import React, { useState } from 'react'

import './Form.css'

export default function Form(props) {
  const [formValue, setFormValue] = useState('')
  const { setItems, items } = props
  const newItems = [...items]

  const handleOnSubmit = (e) => {
    e.preventDefault()
    newItems.push(formValue)
    setItems(newItems)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        placeholder='eggs..'
        onChange={(e) => setFormValue(e.target.value)}
      ></input>
      <button className='margin-left'> Submit </button>
    </form>
  )
}
