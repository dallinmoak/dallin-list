'use client'

export default function ActionIcon(props){
  return(
    <i className="symbol cursor-pointer select-none" onClick={props.onClick}>
      {props.children}
    </i>
  )
}