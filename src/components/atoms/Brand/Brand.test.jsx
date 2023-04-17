import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { Brand } from './Brand'

describe('Brand', () => {
  test('render logo alt text', () => {
    render(() => <Brand />)

    expect(screen.getByAltText('dtmoney logo')).toBeInTheDocument()
  })
})
