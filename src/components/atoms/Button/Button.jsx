
import { splitProps } from 'solid-js'

import { Root } from './style'

export const Button = (props) => {
  const [{ children, color }, rest] = splitProps(props, ['children', 'color'])

  return (
    <Root color={color} {...rest}>{ children }</Root>
  )
}
