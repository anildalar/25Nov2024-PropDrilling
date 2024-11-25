import React from 'react'
import C from './C'

export default function B(props) { //props is formal arg
  return (
    <>
        <div>B Component {props.msg}</div>
        <C msg={props.msg} />
    </>
  )
}
