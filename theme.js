import React from 'react'
import { future } from 'mdx-deck/themes'

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        width: '100vw',
        bottom: 0,
        margin: 8,
        color: future.colors.text,
        fontFamily: future.fonts.body,
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <>
        {[
          <span>DN19: When Product Meets Data</span>,
          <span>|</span>,
          <span>Unlimited Flexibility and how to avoid handing your costumers a loaded gun</span>,
          <span>|</span>,
          <span>20.11.2019</span>
        ]}
      </>
    </div>
  </div>
)

const theme = { ...future, Provider }
export default theme
