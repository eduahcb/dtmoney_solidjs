import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { TableBody } from 'components/molecules/Table'

describe('TableBody component', () => {
  describe('when rendered', () => {
    test('renders table content', () => {
      render(() =>
        <table>
          <TableBody>
            <tr>
              <td>carlim</td>
              <td>23</td>
            </tr>
          </TableBody>
        </table>
      )

      expect(screen.getByText('carlim')).toBeInTheDocument()
      expect(screen.getByText('23')).toBeInTheDocument()
    })
  })
})
