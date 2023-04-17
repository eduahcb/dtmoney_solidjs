
import { splitProps } from 'solid-js'

import { Root } from './style'

export const Card = (props) => {
  const [{ children }, rest] = splitProps(props, ['children'])

  return (
    <Root {...rest}>{children}</Root>
  )
}
