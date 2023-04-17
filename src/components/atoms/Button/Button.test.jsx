import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { Button } from './Button'

describe('Button component', () => {
  test('renders content', () => {
    render(() => <Button>my content</Button>)

    expect(screen.getByText('my content')).toBeInTheDocument()
  })
})
