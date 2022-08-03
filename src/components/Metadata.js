import React from 'react'

export default function Metadata({name, value}) {
  return (
    <div className="metadata">
        <span>{name}: </span>
        <span>{value}</span>
    </div>
  )
}
