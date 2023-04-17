import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { TableRow } from 'components/molecules/Table'

describe('Table component', () => {
  describe('when redered', () => {
    test('renders table content', () => {
      render(() =>
        <table>
          <thead>
            <TableRow>
              <th>name</th>
              <th>description</th>
            </TableRow>
          </thead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
