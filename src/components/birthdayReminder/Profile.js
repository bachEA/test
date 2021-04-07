import React from 'react'

export default function Profile(props) {
  const { img, name, birthday } = props.person
  return (
    <div>
      <img src='' alt=''></img>
      <h3> {name} </h3>
      <h3> {birthday} </h3>
    </div>
  )
}
