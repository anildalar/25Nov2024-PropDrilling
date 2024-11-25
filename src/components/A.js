import React from 'react'
import B from './B'

export default function A(props) {
  return (
    <>
        <div>A Component {props.msg}</div>
        <B msg={props.msg} />
    </>

  )
}
