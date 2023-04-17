import { styled } from 'solid-styled-components'

import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableTh } from './TableTh'
import { TableTd } from './TableTd'
import { TableRow } from './TableRow'

export const Root = styled.table`
  width: 100%;
  border-spacing: 0 8px;
`

const Table = (props) => {
  return (
    <Root>{props.children}</Root>
  )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Th = TableTh
Table.Td = TableTd
Table.Row = TableRow

export { Table }
