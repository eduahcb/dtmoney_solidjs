import { describe, test, expect } from 'vitest'

import { render, screen } from '@solidjs/testing-library'
import { Card } from './Card'

describe('Card component', () => {
  test('renders children', () => {
    render(() => <Card><p>this is a text</p></Card>)

    expect(screen.getByText('this is a text')).toBeInTheDocument()
  })

  test('to match snapshot', () => {
    const { asFragment } = render(() => <Card><p>this is a text</p></Card>)

    expect(asFragment()).toMatchSnapshot()
  })
})
