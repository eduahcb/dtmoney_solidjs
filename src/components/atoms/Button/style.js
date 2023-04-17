import { styled } from 'solid-styled-components'

export const Root = styled('button')`
  font-size: 16px;
  color: #fff;
  background-color: ${({ color }) => color === 'primary' ? 'var(--blue-light)' : 'var(--green)'};
  padding: 0 32px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  
  transition: filter 0.2s;
  
  &:hover {
    -webkit-filter: brightness(0.9);
    filter: brightness(0.9);
  } 
`
