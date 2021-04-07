import React, { Fragment } from 'react'

function name({ style, firstName, lastName, children }) {
  if (!firstName || !lastName) {
    return <h3> Please enter your name first</h3>
  }

  return (
    <Fragment>
      <h3> First name: {firstName} </h3>
      <h3 style={style}> Last name: {lastName} </h3>
      <h3> {children ? children : 'No nickname'} </h3>
    </Fragment>
  )
}

export default name
