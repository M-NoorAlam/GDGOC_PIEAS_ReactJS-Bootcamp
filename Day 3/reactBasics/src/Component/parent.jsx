import React from 'react'
import Child1 from './child1'
import Child2 from './child2'
const parent = () => {
  return (
    <div>
      <h1>I am parent</h1>
      <Child1/>
      <Child2/>
    </div>
  )
}

export default parent
