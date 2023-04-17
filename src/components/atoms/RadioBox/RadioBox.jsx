import { splitProps } from 'solid-js'
import { styled } from 'solid-styled-components'

import { darken } from 'polished'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  img {
    height: 24px;
    width: 24px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--title);
  }
`

export const RadioBox = (props) => {
  const [{ img, alt, title }, rest] = splitProps(props, ['img', 'alt', 'title'])

  return (
    <Button type='button' { ...rest }>
      <img src={img} alt={alt} />
      <span>{ title }</span>
    </Button>
  )
}
