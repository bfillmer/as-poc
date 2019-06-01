
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ABSTRACT TYPOGRAPHY ELEMENT
// Allows for composition of standard use items such as ScreenHeadings,
// typical CardHeadings or the like, while also allowing for quickly
// creating a custom heading using any values from our theme scale.
// Separates semantics from typography.

// FAKE THEME
const theme = {
  colors: ['#a00', '#ccc', '#00a'],
  fs: ['12px', '16px', '24px', '32px', '48px', '64px'],
  fw: [400, 600],
  space: [0, '10px', '20px', '40px', '80px']
}

// HEADING FILE
// default to a span as the most basic typography element
function CreateType (props) {
  const {as, children, ...remainder} = props
  return React.createElement(as || 'span', remainder, children)
}

// @TODO theme would come from the props.
const T = styled(CreateType)`
  font-weight: ${({weight}) => weight ? theme.fw[weight] : theme.fw[0]};
  font-size: ${({fs}) => fs ? theme.fs[fs] : theme.fs[1]};

  color: ${({c}) => c ? theme.colors[c] : theme.colors[0]};

  margin: 0; /* @TODO Our reset kills this on live. */
  margin-bottom: ${({space}) => space ? theme.space[space] : theme.space[0]}
`

T.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'])
}

export default T
