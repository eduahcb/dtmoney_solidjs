import { createSignal } from 'solid-js'
import { styled } from 'solid-styled-components'
import { transparentize } from 'polished'

import toast from 'solid-toast'

import * as yup from 'yup'

import { Modal } from 'components/atoms/Modal'
import { Input } from 'components/atoms/Input'
import { Button } from 'components/atoms/Button'
import { RadioBox as RadioBoxComponent } from 'components/atoms/RadioBox'

import IncomeImage from 'assets/income.svg'
import OutcomeImage from 'assets/outcome.svg'

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  button {
    width: 100%;
    height: 4rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const RadioBox = styled(RadioBoxComponent)`
  background-color: ${({ isActive }) =>
    isActive
      ? transparentize(0.9, '#33cc95')
      : transparentize(0.9, '#e62e4d')
  };
`

const Title = styled.h2`
  color: var(--title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const transactionSchema = yup.object({
  title: yup.string().required(),
  amount: yup.number().positive().required(),
  category: yup.string().required()
})

const createNewTransactionFetch = async (transaction) => {
  await fetch('http://localhost:3000/api/transactions', {
    method: 'post',
    body: JSON.stringify(transaction)
  })
}

export const NewTransactionModal = (props) => {
  const [type, setType] = createSignal('deposit')

  const onCloseModal = () => props.onClose()

  const createNewTransaction = async (event) => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    formJson.type = type()
    formJson.amount = Number(formJson.amount)

    try {
      transactionSchema.validateSync(formJson, { abortEarly: false })
    } catch (error) {
      const errors = JSON.parse(JSON.stringify(error)).errors

      for (const err of errors) {
        toast.error(err)
      }
    }

    try {
      await createNewTransactionFetch(formJson)
      props.updateTransactions()
      onCloseModal()
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={onCloseModal}>
        <Title>Cadastrar transação</Title>
        <form onSubmit={createNewTransaction}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Nome"
                name="title"
                id="title"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                placeholder="Preço"
                name="amount"
                id="amount"
              />
            </FormGroup>

            <Grid>
              <RadioBox
                title="Entrada"
                img={IncomeImage}
                onClick={() => setType('deposit')}
                isActive={ type() === 'deposit'}
              />

              <RadioBox
                title="Saída"
                img={OutcomeImage}
                onClick={() => setType('withdraw')}
                isActive={ type() === 'withdraw'}
              />
            </Grid>

            <FormGroup>
              <Input
                type="text"
                placeholder="Categoria"
                name="category"
                id="category"
              />
            </FormGroup>

            <FormGroup>
              <Button color="secondary">Cadastrar</Button>
            </FormGroup>
        </form>
      </Modal>
  )
}
