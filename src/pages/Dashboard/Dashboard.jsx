import { createMemo, createResource, createSignal, Show } from 'solid-js'

import { Brand } from 'components/atoms/Brand'
import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'

import { Content } from './style'

import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'
import { NewTransactionModal } from './NewTransactionModal'

async function fetchGetAllTransactions () {
  const response = await fetch('http://localhost:3000/api/transactions')

  const data = await response.json()

  return data.transactions
}

const getSummary = (transactions) => {
  const results = { total: 0, deposit: 0, withdraw: 0 }

  if (Array.isArray(transactions)) {
    for (const transaction of transactions) {
      results[transaction.type] += transaction.amount

      transaction.type === 'deposit'
        ? results.total += transaction.amount
        : results.total -= transaction.amount
    }
  }

  return results
}

export const Dashboard = () => {
  const [transactions, { refetch }] = createResource(fetchGetAllTransactions)

  const [openModal, setOpenModal] = createSignal(false)

  const summary = createMemo(() => {
    return getSummary(transactions.state === 'ready' ? transactions() : [])
  })

  const closeModal = () => setOpenModal(false)

  const updateTransactions = () => refetch()

  return (
    <>
      <Header>
        <Brand />
        <Button
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          nova transação
        </Button>
      </Header>
      <Content>
        <Summary summary={summary()} />
        <Show
          when={!transactions.loading}
          fallback={<div>loading</div>}
        >
          <TransactionTable transactions={transactions} />
        </Show>
      </Content>

      <NewTransactionModal
        isOpen={openModal()}
        onClose={closeModal}
        updateTransactions={updateTransactions}
      />
    </>
  )
}
