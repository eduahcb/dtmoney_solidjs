import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { TableTh } from 'components/molecules/Table'

describe('TableTh component', () => {
  describe('when rendered', () => {
    test('renders table content', () => {
      render(() =>
        <table>
          <thead>
            <tr>
              <TableTh>name</TableTh>
              <TableTh>description</TableTh>
            </tr>
          </thead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
