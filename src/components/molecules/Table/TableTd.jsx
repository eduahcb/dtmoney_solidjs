import { styled } from 'solid-styled-components'

export const Root = styled.td`
  padding: 16px 32px;
  border: 0;
  background: var(--shape-principal);
  color: var(--text);
  border-radius: 4px;
`

export const TableTd = (props) => {
  return (
    <Root {...props}>{props.children}</Root>
  )
}
