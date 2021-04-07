import React, { Fragment } from 'react'

export default function Book({
  id,
  title,
  description,
  author,
  unit_Price,
  onClick,
}) {
  return (
    <Fragment>
      <h5>
        {' '}
        The book {title} is written by {author}{' '}
      </h5>
      <button name={title} id={id} onClick={onClick}>
        {' '}
        Click me{' '}
      </button>
    </Fragment>
  )
}
