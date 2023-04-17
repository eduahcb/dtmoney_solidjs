import { styled } from 'solid-styled-components'

export const Root = styled.th`
  color: var(--text);
  font-weight: 400px;
  padding: 16px 32px;
  text-align: left;
  line-height: 1.5;
`

export const TableTh = (props) => {
  return (
    <Root>{props.children}</Root>
  )
}
