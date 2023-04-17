import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { TableHead } from 'components/molecules/Table'

describe('TableHead component', () => {
  describe('when rendered', () => {
    test('renders table content', () => {
      render(() =>
        <table>
          <TableHead>
            <tr>
              <th>name</th>
              <th>description</th>
            </tr>
          </TableHead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
