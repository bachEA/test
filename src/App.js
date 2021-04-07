import React, { useState, useEffect } from 'react'

import './App.css'
import CartItem from './components/cart/CartItem'

function App() {
  const [items, setItems] = useState([])
  return (
    <div>
      <h1> Your bag </h1>
      {items.length === 0
        ? ''
        : items.map((item, index) => {
            return <CartItem key={index} item={item} />
          })}
    </div>
  )
}

export default App
