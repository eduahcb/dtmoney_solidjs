import {
  Summary as StyleSummary,
  Card,
  CardHeader,
  GreenCard
} from './style'

import IncomeImage from 'assets/income.svg'
import OutcomeImage from 'assets/outcome.svg'
import TotalImage from 'assets/total.svg'

export const formatNumber = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

export const Summary = (props) => {
  const total = () => props.summary.total
  const deposit = () => props.summary.deposit
  const withdraw = () => props.summary.withdraw

  return (
    <StyleSummary>
      <Card>
          <CardHeader>
            <p>entradas</p>
            <img src={IncomeImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(total())}</strong>
      </Card>
      <Card>
          <CardHeader>
            <p>saída</p>
            <img src={OutcomeImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(deposit())}</strong>
      </Card>
      <GreenCard>
          <CardHeader>
            <p>total</p>
            <img src={TotalImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(withdraw())}</strong>
      </GreenCard>
    </StyleSummary>
  )
}
