
import React from 'react'

import T from './T'

function ScreenHeading (props) {
  return <T as='h2' weight={1} fs={3} c={2} {...props} />
}

function App() {
  return (
    <section>
      <ScreenHeading>A Simple Test</ScreenHeading>
      <T as='h3' fs={1}>A different heading.</T>
      <T as='h5' fs={4} c={1}>Big, but less important semantically.</T>
    </section>
  )
}

export default App
