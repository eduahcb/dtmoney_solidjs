import { describe, test, expect } from 'vitest'

import { render, screen } from '@solidjs/testing-library'

import { Header } from './Header'

describe('Header', () => {
  test('renders', () => {
    render(() => <Header><p>this is a text</p></Header>)

    expect(screen.getByText('this is a text')).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(() => <Header><p>this is a text</p></Header>)

    expect(asFragment()).toMatchSnapshot()
  })
})
