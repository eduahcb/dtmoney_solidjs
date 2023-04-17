import { For } from 'solid-js'

import {
  TitleColumn,
  PriceColumn
} from './style'

import { Table } from 'components/molecules/Table'

export const formatNumber = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const formatDate = (date) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date))

export const TransactionTable = (props) => {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Th>Título</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Categoria</Table.Th>
          <Table.Th>Data</Table.Th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <For each={props.transactions()}>
          {
            transaction => (
              <Table.Row key={transaction.id}>
              <TitleColumn>{transaction.title}</TitleColumn>
              <PriceColumn type={transaction.type}>
                {transaction.type === 'withdraw' && '- '}
                {formatNumber(transaction.amount)}
              </PriceColumn>
              <Table.Td>{transaction.category}</Table.Td>
              <Table.Td>{formatDate(transaction.createdAt)}</Table.Td>
            </Table.Row>
            )
          }
        </For>
      </Table.Body>
    </Table>
  )
}
